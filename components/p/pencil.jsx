import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v1tummutu.css';
import '../../css/b/bcfxl-b2t.css';
import '../../css/g/gwasqepzs.css';
import '../../css/h/hpsmcoe0e.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="v1tummutu"/><path clip-rule="evenodd" class="bcfxl-b2t"/><path clip-rule="evenodd" class="gwasqepzs"/><path class="hpsmcoe0e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:pencil"} {...others} />);
}

export default Component;
