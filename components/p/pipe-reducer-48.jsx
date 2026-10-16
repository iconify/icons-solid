import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/df4gvuaqr.css';
import '../../css/f/friicz-ai.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="df4gvuaqr"/><path class="friicz-ai"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pipe-reducer-48"} {...others} />);
}

export default Component;
