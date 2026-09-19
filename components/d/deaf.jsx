import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d98mzkk1w.css';
import '../../css/t/t9o16wbon.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="d98mzkk1w"/><path class="t9o16wbon"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:deaf"} {...others} />);
}

export default Component;
