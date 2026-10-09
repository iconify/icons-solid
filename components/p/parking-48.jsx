import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z0dvj9g4i.css';
import '../../css/i/iv3xvpmgh.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="z0dvj9g4i"/><path class="iv3xvpmgh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:parking-48"} {...others} />);
}

export default Component;
