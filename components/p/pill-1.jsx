import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cpzch7b1t.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="cpzch7b1t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:pill-1"} {...others} />);
}

export default Component;
