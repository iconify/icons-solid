import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i7dkymbhs.css';
import '../../css/s/sa1-qxbjq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="i7dkymbhs"/><path class="sa1-qxbjq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:paper-mill-20"} {...others} />);
}

export default Component;
