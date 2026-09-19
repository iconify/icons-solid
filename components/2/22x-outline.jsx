import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h0i5ozbxp.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="h0i5ozbxp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:22x-outline"} {...others} />);
}

export default Component;
