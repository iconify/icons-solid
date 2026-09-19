import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/xy2ch-bib.css';
import '../../css/r/rx0twx8ej.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="xy2ch-bib"/><path class="rx0twx8ej"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mortarboard-01"} {...others} />);
}

export default Component;
