import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vw8ljybdn.css';
import '../../css/p/pffk4hbru.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vw8ljybdn"/><path class="pffk4hbru"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:badge-turkish-lira"} {...others} />);
}

export default Component;
