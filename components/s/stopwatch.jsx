import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8li1cb6w.css';
import '../../css/j/jhuinh89q.css';
import '../../css/l/lu352gbpw.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="n8li1cb6w"/><path class="jhuinh89q"/><path class="lu352gbpw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:stopwatch"} {...others} />);
}

export default Component;
