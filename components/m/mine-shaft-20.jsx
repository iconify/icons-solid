import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ubnupnbby.css';
import '../../css/z/zbrckdb1x.css';
import '../../css/m/mkvuid9tr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ubnupnbby"/><path class="zbrckdb1x"/><path class="mkvuid9tr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mine-shaft-20"} {...others} />);
}

export default Component;
