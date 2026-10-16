import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lydoh1n-z.css';
import '../../css/l/laty4l76k.css';
import '../../css/k/k_8z-tbww.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="lydoh1n-z"/><path class="laty4l76k"/><path class="k_8z-tbww"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:lasso-48-bold"} {...others} />);
}

export default Component;
