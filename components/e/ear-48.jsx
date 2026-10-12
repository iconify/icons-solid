import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/drz0z9bei.css';
import '../../css/j/jcbxfnaqh.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="drz0z9bei"/><path class="jcbxfnaqh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ear-48"} {...others} />);
}

export default Component;
