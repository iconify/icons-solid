import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wcpth-wqs.css';
import '../../css/l/lx7mkia0m.css';
import '../../css/h/hkc780bsc.css';
import '../../css/p/pkssvg6_z.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="wcpth-wqs"/><path class="lx7mkia0m"/><path class="hkc780bsc"/><path class="pkssvg6_z"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-guinea-bissau"} {...others} />);
}

export default Component;
