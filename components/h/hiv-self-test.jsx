import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uw0pzeiyk.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="uw0pzeiyk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:hiv-self-test"} {...others} />);
}

export default Component;
