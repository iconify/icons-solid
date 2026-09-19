import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eb61mvb8t.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="eb61mvb8t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:m2x-outline"} {...others} />);
}

export default Component;
