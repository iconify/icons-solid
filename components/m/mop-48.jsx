import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e87_g27hf.css';
import '../../css/m/meixbtdgm.css';
import '../../css/k/kudtq_b6j.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="e87_g27hf"/><path class="meixbtdgm"/><path class="kudtq_b6j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mop-48"} {...others} />);
}

export default Component;
