import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dlusl2c1l.css';
import '../../css/v/v1u1ysozk.css';
import '../../css/j/jwidh_pae.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="dlusl2c1l"/><path class="v1u1ysozk"/><path class="jwidh_pae"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fuel-gauge-48"} {...others} />);
}

export default Component;
