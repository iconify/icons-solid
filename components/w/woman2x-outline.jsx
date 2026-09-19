import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/su8br7b-v.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="su8br7b-v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:woman2x-outline"} {...others} />);
}

export default Component;
