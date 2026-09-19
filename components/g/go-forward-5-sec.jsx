import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/pbc6ycggl.css';
import '../../css/u/u89omufwi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="pbc6ycggl"/><path class="u89omufwi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:go-forward-5-sec"} {...others} />);
}

export default Component;
