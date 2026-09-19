import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m72l4abnf.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="m72l4abnf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:v"} {...others} />);
}

export default Component;
