import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qe6ubvbek.css';
import '../../css/y/ybq961s0r.css';
import '../../css/c/crjp0abmv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="qe6ubvbek"/><path class="ybq961s0r"/><path class="crjp0abmv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:money-exchange-01"} {...others} />);
}

export default Component;
