import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sc2qdpb0p.css';
import '../../css/t/t6j-81blu.css';
import '../../css/g/gucqo8_bv.css';
import '../../css/u/us6k9zjpu.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="sc2qdpb0p"/><path class="t6j-81blu"/><path class="gucqo8_bv"/><path class="us6k9zjpu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:shark"} {...others} />);
}

export default Component;
