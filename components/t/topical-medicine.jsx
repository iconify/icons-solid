import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l-lpk5fog.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="l-lpk5fog"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:topical-medicine"} {...others} />);
}

export default Component;
