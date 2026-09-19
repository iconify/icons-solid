import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xvs_6lz2b.css';
import '../../css/z/z-u_4v9zs.css';
import '../../css/f/ftcbseb_g.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="xvs_6lz2b"/><path class="z-u_4v9zs"/><path class="ftcbseb_g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:info-circle"} {...others} />);
}

export default Component;
