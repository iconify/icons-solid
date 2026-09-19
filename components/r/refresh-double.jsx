import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/pao9cab5l.css';
import '../../css/n/nbo5_vccv.css';
import '../../css/r/rhfhlozer.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="pao9cab5l"/><path class="nbo5_vccv"/><path class="rhfhlozer"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:refresh-double"} {...others} />);
}

export default Component;
