import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/ijp7_ttxp.css';
import '../../css/t/t382i1b8h.css';
import '../../css/e/eqxd83_dz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ijp7_ttxp"/><circle class="t382i1b8h"/><path class="eqxd83_dz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:user-id-verification"} {...others} />);
}

export default Component;
