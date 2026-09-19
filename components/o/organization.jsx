import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jt59w0z1x.css';
import '../../css/u/upwskszgb.css';
import '../../css/p/pqv887qbm.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="jt59w0z1x"/><path class="upwskszgb"/><path class="pqv887qbm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:organization"} {...others} />);
}

export default Component;
