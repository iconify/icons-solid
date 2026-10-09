import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jkpulpb9y.css';
import '../../css/p/p1om3-m6g.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jkpulpb9y"/><path class="p1om3-m6g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:app-window-20-bold"} {...others} />);
}

export default Component;
