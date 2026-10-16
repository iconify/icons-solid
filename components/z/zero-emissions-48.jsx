import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vek0mzq4d.css';
import '../../css/s/sf_tgu5lj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vek0mzq4d"/><path class="sf_tgu5lj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:zero-emissions-48"} {...others} />);
}

export default Component;
