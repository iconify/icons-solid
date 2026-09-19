import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qn2us-vvy.css';
import '../../css/y/y-9gdnm7b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qn2us-vvy"/><path class="y-9gdnm7b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:broadcast"} {...others} />);
}

export default Component;
