import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pu8bbgk9u.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="pu8bbgk9u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:v2x-outline"} {...others} />);
}

export default Component;
