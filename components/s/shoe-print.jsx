import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/urra7zbtu.css';
import '../../css/w/wcoui61up.css';
import '../../css/e/ei46kjzmg.css';
import '../../css/k/kgsfw5daa.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="urra7zbtu"/><path clip-rule="evenodd" class="wcoui61up"/><path class="ei46kjzmg"/><path class="kgsfw5daa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:shoe-print"} {...others} />);
}

export default Component;
