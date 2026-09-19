import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t0z8m6xkt.css';
import '../../css/z/zds3n0a5a.css';
import '../../css/v/v3un2gbqx.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="t0z8m6xkt"/><path class="zds3n0a5a"/><path class="v3un2gbqx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:star-half-1-duo"} {...others} />);
}

export default Component;
