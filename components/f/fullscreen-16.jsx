import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mgu2i2bgi.css';
import '../../css/g/gyh2arbtb.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="mgu2i2bgi"/><path clip-rule="evenodd" class="gyh2arbtb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:fullscreen-16"} {...others} />);
}

export default Component;
