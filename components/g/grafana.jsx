import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mfsg-tbww.css';
import '../../css/m/mad_2hbbu.css';
import '../../css/f/fi5bwcx5m.css';

const viewBox = {"width":256,"height":279};
const content = `<defs><linearGradient id="SVGzNMMBeHh" x1="49.995%" x2="49.995%" y1="122.45%" y2="31.139%"><stop offset="0%" class="mfsg-tbww"/><stop offset="100%" class="mad_2hbbu"/></linearGradient></defs><path fill="url(#SVGzNMMBeHh)" class="fi5bwcx5m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:grafana"} {...others} />);
}

export default Component;
