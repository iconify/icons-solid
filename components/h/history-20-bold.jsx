import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mubd4760u.css';
import '../../css/h/hfy0htikh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="mubd4760u"/><path class="hfy0htikh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:history-20-bold"} {...others} />);
}

export default Component;
