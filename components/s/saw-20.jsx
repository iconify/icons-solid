import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ov7zehb3m.css';
import '../../css/r/rs63jfdfq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ov7zehb3m"/><path class="rs63jfdfq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:saw-20"} {...others} />);
}

export default Component;
