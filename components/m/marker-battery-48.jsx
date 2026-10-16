import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c9v855hut.css';
import '../../css/j/jueaa4b2t.css';
import '../../css/v/vgbz9zx-x.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="c9v855hut"/><path class="jueaa4b2t"/><path class="vgbz9zx-x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:marker-battery-48"} {...others} />);
}

export default Component;
