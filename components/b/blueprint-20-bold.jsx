import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v7flpyn_l.css';
import '../../css/o/ogb69-b7q.css';
import '../../css/q/qcsvf7y1w.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="v7flpyn_l"/><path class="ogb69-b7q"/><path class="qcsvf7y1w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:blueprint-20-bold"} {...others} />);
}

export default Component;
