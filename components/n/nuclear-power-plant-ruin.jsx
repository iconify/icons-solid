import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mhfrgtbkm.css';
import '../../css/e/e6wn1qlca.css';
import '../../css/l/loz46zgag.css';
import '../../css/m/ml4n4-8gg.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/v/vtk6uvxsm.css';
import '../../css/g/gdep6kbjz.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="mhfrgtbkm"/><path class="e6wn1qlca"/><path class="loz46zgag"/><path class="ml4n4-8gg"/><g class="jn8qy4bru"><path class="vtk6uvxsm"/><path class="gdep6kbjz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:nuclear-power-plant-ruin"} {...others} />);
}

export default Component;
