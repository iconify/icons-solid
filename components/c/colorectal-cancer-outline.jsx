import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9y5-zbbv.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="s9y5-zbbv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:colorectal-cancer-outline"} {...others} />);
}

export default Component;
