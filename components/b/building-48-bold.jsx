import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pwzk_6p2e.css';
import '../../css/u/uy6zwjbkh.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pwzk_6p2e"/><path class="uy6zwjbkh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:building-48-bold"} {...others} />);
}

export default Component;
