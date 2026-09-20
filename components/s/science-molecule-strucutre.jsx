import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dyd0tnbxy.css';
import '../../css/a/aegvtybzp.css';
import '../../css/k/k6se9zb2o.css';
import '../../css/d/d9ycpxblr.css';
import '../../css/g/gkx8n-bop.css';
import '../../css/s/suh_j5rgc.css';
import '../../css/w/whvurlpeb.css';
import '../../css/v/vodqsn9ry.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dyd0tnbxy"/><path class="aegvtybzp"/><path class="k6se9zb2o"/><path class="d9ycpxblr"/><path class="gkx8n-bop"/><path class="suh_j5rgc"/><path class="whvurlpeb"/><path class="vodqsn9ry"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:science-molecule-strucutre"} {...others} />);
}

export default Component;
