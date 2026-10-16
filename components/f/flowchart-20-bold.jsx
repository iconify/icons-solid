import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nyvh6kk2s.css';
import '../../css/j/jk43hwbxb.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="nyvh6kk2s"/><path class="jk43hwbxb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:flowchart-20-bold"} {...others} />);
}

export default Component;
