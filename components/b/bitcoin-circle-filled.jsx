import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/smd-g2-lg.css';
import '../../css/w/w9yumzbsf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="smd-g2-lg"/><path clip-rule="evenodd" class="w9yumzbsf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:bitcoin-circle-filled"} {...others} />);
}

export default Component;
