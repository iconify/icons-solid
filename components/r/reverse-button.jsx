import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/levtbqbbg.css';
import '../../css/c/c_o0h-edl.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="levtbqbbg"/><path class="c_o0h-edl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:reverse-button"} {...others} />);
}

export default Component;
