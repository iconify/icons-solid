import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c9v855hut.css';
import '../../css/x/xs8ua7-4a.css';
import '../../css/c/c_yb27byc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="c9v855hut"/><path class="xs8ua7-4a"/><path class="c_yb27byc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:marker-nuclear-48"} {...others} />);
}

export default Component;
