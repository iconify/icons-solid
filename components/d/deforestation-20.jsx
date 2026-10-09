import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/knx2mmctr.css';
import '../../css/g/g8p6evbep.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="knx2mmctr"/><path class="g8p6evbep"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:deforestation-20"} {...others} />);
}

export default Component;
