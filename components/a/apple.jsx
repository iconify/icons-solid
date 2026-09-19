import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wmmnt9jkb.css';
import '../../css/b/b2fitjben.css';
import '../../css/i/i38s-hq5f.css';
import '../../css/n/nqxug22ic.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wmmnt9jkb"/><path class="b2fitjben"/><path clip-rule="evenodd" class="i38s-hq5f"/><path class="nqxug22ic"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:apple"} {...others} />);
}

export default Component;
