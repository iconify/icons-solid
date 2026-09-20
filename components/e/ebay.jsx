import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ibji53hgr.css';
import '../../css/h/htxinv2lu.css';
import '../../css/c/c3u1av0au.css';
import '../../css/e/e-m77qbec.css';

const viewBox = {"width":299.8,"height":120.125,"left":0.1,"top":0.1};
const content = `<path class="ibji53hgr"/><path class="htxinv2lu"/><path class="c3u1av0au"/><path class="e-m77qbec"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:ebay"} {...others} />);
}

export default Component;
