import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ezw6blbcm.css';
import '../../css/p/pwe_-ab6j.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ezw6blbcm"/><path class="pwe_-ab6j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cricket-48"} {...others} />);
}

export default Component;
