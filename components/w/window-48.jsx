import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gulry0b2k.css';
import '../../css/j/jfdl44b3i.css';
import '../../css/b/bfk_0tp3e.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="gulry0b2k"/><path class="jfdl44b3i"/><path class="bfk_0tp3e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:window-48"} {...others} />);
}

export default Component;
