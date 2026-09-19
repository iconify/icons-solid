import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkqky1bmv.css';
import '../../css/c/cps_4vb0w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dkqky1bmv"/><path class="cps_4vb0w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:wallet-filled"} {...others} />);
}

export default Component;
