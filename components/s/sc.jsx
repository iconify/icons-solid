import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/a/az4xxt77u.css';
import '../../css/a/am4lt2gth.css';
import '../../css/v/vfq30j15m.css';
import '../../css/d/d6vschbet.css';
import '../../css/i/ix8i5lbjc.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="az4xxt77u"/><path class="am4lt2gth"/><path class="vfq30j15m"/><path class="d6vschbet"/><path class="ix8i5lbjc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:sc"} {...others} />);
}

export default Component;
