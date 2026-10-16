import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c5nn_nvzj.css';
import '../../css/y/yrrvfsjve.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="c5nn_nvzj"/><path class="yrrvfsjve"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heart-crack-48-bold"} {...others} />);
}

export default Component;
