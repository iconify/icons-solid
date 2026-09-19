import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iitrv6b_u.css';
import '../../css/j/jeqnyebai.css';
import '../../css/p/pzp-sptxq.css';
import '../../css/r/r-n3tp3un.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="iitrv6b_u"><path class="jeqnyebai"/><path class="pzp-sptxq"/><path class="r-n3tp3un"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:cargo"} {...others} />);
}

export default Component;
