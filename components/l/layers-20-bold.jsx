import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e5yiolbrq.css';
import '../../css/q/qsgv5bbpc.css';
import '../../css/z/zf9x55bcw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="e5yiolbrq"/><path class="qsgv5bbpc"/><path class="zf9x55bcw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:layers-20-bold"} {...others} />);
}

export default Component;
