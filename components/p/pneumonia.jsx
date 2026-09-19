import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w5vx22b2x.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="w5vx22b2x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:pneumonia"} {...others} />);
}

export default Component;
