import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/a/acxaut9dg.css';
import '../../css/n/nwplrgbog.css';
import '../../css/a/ab9b2_byt.css';
import '../../css/v/vz7twc1ep.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><rect class="acxaut9dg"/><path class="nwplrgbog"/><path class="ab9b2_byt"/><path class="vz7twc1ep"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:microphone"} {...others} />);
}

export default Component;
