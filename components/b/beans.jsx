import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3d2xsbfa.css';
import '../../css/o/o2zoxdw1l.css';
import '../../css/s/sqkqqys5r.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="v3d2xsbfa"/><path class="o2zoxdw1l"/><path class="sqkqqys5r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:beans"} {...others} />);
}

export default Component;
