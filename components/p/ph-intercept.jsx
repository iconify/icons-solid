import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fsekkdb4g.css';
import '../../css/w/wzbzucbxn.css';
import '../../css/k/k334fkbrf.css';
import '../../css/m/m9jre_2zl.css';
import '../../css/z/z_sxiwi_i.css';
import '../../css/f/f7wo1slpc.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGn4kKNdjC" x2="403.2" y1="-10.7" y2="-10.7" gradientUnits="userSpaceOnUse"><stop offset="0" class="fsekkdb4g"/><stop offset=".5" class="wzbzucbxn"/><stop offset=".84" class="k334fkbrf"/><stop offset="1" class="m9jre_2zl"/></linearGradient><path fill="url(#SVGn4kKNdjC)" class="z_sxiwi_i"/><path class="f7wo1slpc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ph-intercept"} {...others} />);
}

export default Component;
