import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a44nu1b1v.css';
import '../../css/p/pdt_z-fvk.css';
import '../../css/f/fx90jorko.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="a44nu1b1v"/><path class="pdt_z-fvk"/><path class="fx90jorko"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:photogrammetry"} {...others} />);
}

export default Component;
