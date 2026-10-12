import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p-g4sebdp.css';
import '../../css/r/rgxxgpvpr.css';
import '../../css/f/fl3ji4hnv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 22.3 17.38)" class="p-g4sebdp"/><rect transform="matrix(0 -1 -1 0 22.3 17.38)" class="rgxxgpvpr"/><path class="fl3ji4hnv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:passcode"} {...others} />);
}

export default Component;
