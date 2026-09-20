import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/je99bqbog.css';
import '../../css/c/cq971jbmr.css';
import '../../css/u/u6e-jyp6v.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><circle class="je99bqbog"/><circle class="cq971jbmr"/><path class="u6e-jyp6v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:travel-map-location-target-1-navigation-location-map-services-maps-gps-target"} {...others} />);
}

export default Component;
