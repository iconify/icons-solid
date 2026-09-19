import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/viffdvb1f.css';
import '../../css/h/hioaetbpt.css';
import '../../css/b/bq582cd1i.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="viffdvb1f"/><path class="hioaetbpt"/><path class="bq582cd1i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:fire-smoke"} {...others} />);
}

export default Component;
