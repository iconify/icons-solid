import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fe737fbnr.css';
import '../../css/q/qjfl8--kf.css';
import '../../css/u/u_0jnmbik.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fe737fbnr"/><path class="qjfl8--kf"/><path class="u_0jnmbik"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:biogas-digester-48-bold"} {...others} />);
}

export default Component;
