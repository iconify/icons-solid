import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f9o2spbcm.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="f9o2spbcm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:0-outline"} {...others} />);
}

export default Component;
