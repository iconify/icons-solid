import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d57-jm2nc.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hrriopfdg.css';
import '../../css/p/p_3zmsvya.css';
import '../../css/f/fu5fcwb3h.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGwNo5uPet" class="d57-jm2nc"/></defs><g class="ft5dv1b6b"><path class="hrriopfdg"/><use href="#SVGwNo5uPet"/><g class="p_3zmsvya"><path class="fu5fcwb3h"/><use href="#SVGwNo5uPet"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:banana"} {...others} />);
}

export default Component;
