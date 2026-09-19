import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mnl7bw4sb.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="mnl7bw4sb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:lark"} {...others} />);
}

export default Component;
