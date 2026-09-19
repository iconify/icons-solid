import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/solijxaxw.css';
import '../../css/u/u1tpowbtb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="solijxaxw"/><path class="u1tpowbtb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:glass-water"} {...others} />);
}

export default Component;
