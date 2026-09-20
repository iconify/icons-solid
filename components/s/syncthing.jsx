import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wf93-kb8r.css';
import '../../css/q/qunbzgvvb.css';
import '../../css/i/iycln-b8i.css';
import '../../css/y/y-50ago-f.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGYVBYcbxg" x1="256" x2="256" y1="1183.3" y2="671.3" gradientTransform="translate(0 -671.3)" gradientUnits="userSpaceOnUse"><stop offset="0" class="wf93-kb8r"/><stop offset="1" class="qunbzgvvb"/></linearGradient><circle fill="url(#SVGYVBYcbxg)" class="iycln-b8i"/><path class="y-50ago-f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:syncthing"} {...others} />);
}

export default Component;
