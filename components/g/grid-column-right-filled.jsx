import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xpbvj0b9n.css';
import '../../css/n/neukm1fuz.css';
import '../../css/k/kr2jicboj.css';

const viewBox = {"width":24,"height":24};
const content = `<rect class="xpbvj0b9n"/><rect class="neukm1fuz"/><rect class="kr2jicboj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:grid-column-right-filled"} {...others} />);
}

export default Component;
