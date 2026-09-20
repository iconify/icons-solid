import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u5kdsjbsk.css';
import '../../css/w/wl2vi-wfs.css';
import '../../css/p/ph-mjcb4f.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="u5kdsjbsk"/><path class="wl2vi-wfs"/><path class="ph-mjcb4f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:black-rectangle"} {...others} />);
}

export default Component;
