import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uj5b0nhsu.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="uj5b0nhsu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:award-ribbon2x-outline"} {...others} />);
}

export default Component;
