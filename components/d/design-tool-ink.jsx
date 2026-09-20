import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/ldx3nnbdl.css';
import '../../css/r/rfq943bqv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ldx3nnbdl"/><path class="rfq943bqv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:design-tool-ink"} {...others} />);
}

export default Component;
