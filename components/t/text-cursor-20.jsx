import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cambr2b9u.css';
import '../../css/i/iotq56wry.css';
import '../../css/j/jhhngsf8c.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="cambr2b9u"/><path class="iotq56wry"/><path class="jhhngsf8c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:text-cursor-20"} {...others} />);
}

export default Component;
