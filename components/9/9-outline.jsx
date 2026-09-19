import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t90_9xbww.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="t90_9xbww"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:9-outline"} {...others} />);
}

export default Component;
