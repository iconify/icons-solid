import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/neukm1fuz.css';
import '../../css/b/bhbvqjyxk.css';
import '../../css/k/kr2jicboj.css';
import '../../css/g/gtn46m-jg.css';

const viewBox = {"width":24,"height":24};
const content = `<rect class="neukm1fuz"/><rect class="bhbvqjyxk"/><rect class="kr2jicboj"/><rect class="gtn46m-jg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:grid-filled"} {...others} />);
}

export default Component;
