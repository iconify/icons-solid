import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mfsg-tbww.css';
import '../../css/m/mad_2hbbu.css';
import '../../css/n/nik-3sbnx.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGIKlvidax" x1="708.067" x2="114.307" y1="410.748" y2="227.6" gradientTransform="matrix(1 0 0 -1 0 514.83)" gradientUnits="userSpaceOnUse"><stop offset="0" class="mfsg-tbww"/><stop offset="1" class="mad_2hbbu"/></linearGradient><path fill="url(#SVGIKlvidax)" class="nik-3sbnx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:grafana-tempo"} {...others} />);
}

export default Component;
