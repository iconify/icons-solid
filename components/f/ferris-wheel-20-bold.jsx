import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ol0wd5rgv.css';
import '../../css/w/wkt-wub-t.css';
import '../../css/e/e4zi4ibxn.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ol0wd5rgv"/><path class="wkt-wub-t"/><path class="e4zi4ibxn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ferris-wheel-20-bold"} {...others} />);
}

export default Component;
