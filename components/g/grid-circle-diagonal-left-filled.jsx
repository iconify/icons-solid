import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j5evaxbui.css';
import '../../css/b/bhbvqjyxk.css';
import '../../css/k/kr2jicboj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j5evaxbui"/><rect class="bhbvqjyxk"/><rect class="kr2jicboj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:grid-circle-diagonal-left-filled"} {...others} />);
}

export default Component;
