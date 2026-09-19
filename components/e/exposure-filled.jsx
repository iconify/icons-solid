import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vs-ujmdie.css';
import '../../css/f/fwixbousw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vs-ujmdie"/><path class="fwixbousw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:exposure-filled"} {...others} />);
}

export default Component;
