import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ethc65zvb.css';
import '../../css/p/pkygmcb8t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ethc65zvb"/><path class="pkygmcb8t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:medal-alt-filled"} {...others} />);
}

export default Component;
