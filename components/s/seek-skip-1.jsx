import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/a/apidz6brj.css';
import '../../css/i/iji07ubvv.css';
import '../../css/z/z4n__z8-t.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ufeehvblu"><path class="apidz6brj"/><path class="iji07ubvv"/><path class="z4n__z8-t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:seek-skip-1"} {...others} />);
}

export default Component;
