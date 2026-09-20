import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r_jdtd8kg.css';
import '../../css/z/zicea_d5l.css';
import '../../css/e/euk9mbcgu.css';
import '../../css/w/wj8rs48_f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="r_jdtd8kg"/><path class="zicea_d5l"/><path class="euk9mbcgu"/><path class="wj8rs48_f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:https"} {...others} />);
}

export default Component;
