import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/o/o0n3p_e0w.css';
import '../../css/m/mzu1w-bmc.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="to-5kdesz"><path class="o0n3p_e0w"/><path class="mzu1w-bmc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:seek-step-bold"} {...others} />);
}

export default Component;
