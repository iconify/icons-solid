import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/haxjj3y8l.css';
import '../../css/c/ca098sbgi.css';
import '../../css/p/pbj3dmu5b.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="haxjj3y8l"/><path class="ca098sbgi"/><path class="pbj3dmu5b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:plug-48"} {...others} />);
}

export default Component;
