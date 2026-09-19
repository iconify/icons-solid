import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/td4grnbkl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="td4grnbkl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:hand-point-right"} {...others} />);
}

export default Component;
