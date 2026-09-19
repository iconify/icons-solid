import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b9f-8qbgv.css';
import '../../css/m/m9v16xb5u.css';
import '../../css/y/ygex-6bzt.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><rect transform="rotate(45 40 6)" class="b9f-8qbgv"/><path class="m9v16xb5u"/><path class="ygex-6bzt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:u-turn-sign"} {...others} />);
}

export default Component;
