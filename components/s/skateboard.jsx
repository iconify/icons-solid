import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/iw10st5zi.css';
import '../../css/f/f_yyjfmsx.css';
import '../../css/c/cge1rbc4r.css';

const viewBox = {"width":16,"height":16};
const content = `<g transform="translate(0 5)" class="n1lsf0bnc"><path class="iw10st5zi"/><ellipse class="f_yyjfmsx"/><ellipse class="cge1rbc4r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:skateboard"} {...others} />);
}

export default Component;
