import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/moc096_4x.css';
import '../../css/h/ha-x6codx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="moc096_4x"/><path class="ha-x6codx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:chart-pie-filled"} {...others} />);
}

export default Component;
