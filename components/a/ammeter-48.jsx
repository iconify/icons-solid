import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ndoo8eizj.css';
import '../../css/h/h7ne39bmg.css';
import '../../css/z/z0k_6w9gl.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ndoo8eizj"/><path class="h7ne39bmg"/><path class="z0k_6w9gl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ammeter-48"} {...others} />);
}

export default Component;
