import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dedavkmjc.css';
import '../../css/r/r_0d81uyp.css';
import '../../css/k/kdjjl7-tp.css';
import '../../css/k/k___aiysz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGlmZzreoD"><g class="ft5dv1b6b"><rect transform="rotate(-90 14 44)" class="dedavkmjc"/><path class="r_0d81uyp"/><path class="kdjjl7-tp"/><circle transform="matrix(0 -1 -1 0 24 34)" class="k___aiysz"/></g></mask></defs><path mask="url(#SVGlmZzreoD)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:battery-tips"} {...others} />);
}

export default Component;
