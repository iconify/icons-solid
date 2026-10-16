import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c9v855hut.css';
import '../../css/n/ngvqi5buw.css';
import '../../css/f/f9ek-9bwn.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="c9v855hut"/><path class="ngvqi5buw"/><path class="f9ek-9bwn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:marker-substation-48"} {...others} />);
}

export default Component;
