import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uzih16b5q.css';
import '../../css/j/jgaaeabvy.css';
import '../../css/o/oz0-7c0kb.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="uzih16b5q"/><path class="jgaaeabvy"/><path class="oz0-7c0kb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:beach-hut-48-bold"} {...others} />);
}

export default Component;
