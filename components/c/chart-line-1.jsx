import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/ibgd_d3-d.css';
import '../../css/d/duhytsawt.css';
import '../../css/e/eux6wjb8m.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="ibgd_d3-d"/><path class="duhytsawt"/><path class="eux6wjb8m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:chart-line-1"} {...others} />);
}

export default Component;
