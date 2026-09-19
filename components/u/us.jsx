import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/j/j29qogbvy.css';
import '../../css/v/vqdqihuwl.css';
import '../../css/i/i7s2upniq.css';
import '../../css/q/qjxdwi-8i.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="j29qogbvy"/><path class="vqdqihuwl"/><path class="i7s2upniq"/><path class="qjxdwi-8i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:us"} {...others} />);
}

export default Component;
