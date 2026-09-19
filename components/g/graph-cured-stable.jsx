import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/h4fu5v_la.css';
import '../../css/l/lvhb8mgml.css';
import '../../css/e/emjm_bcem.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="h4fu5v_la"/><path class="lvhb8mgml"/><path class="emjm_bcem"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:graph-cured-stable"} {...others} />);
}

export default Component;
