import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/amb3slunr.css';
import '../../css/p/prn6stb0i.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="amb3slunr"/><path class="prn6stb0i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:kick-scooter-48"} {...others} />);
}

export default Component;
