import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/uw6kyrbng.css';
import '../../css/s/snbrnrc_w.css';
import '../../css/o/olyp84b8n.css';
import '../../css/c/c007ltvaa.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><g transform="translate(3)"><path class="uw6kyrbng"/><ellipse class="snbrnrc_w"/><path class="olyp84b8n"/></g><path class="c007ltvaa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:solar-blind"} {...others} />);
}

export default Component;
