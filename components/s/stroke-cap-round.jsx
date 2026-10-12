import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nh5vr0b3s.css';
import '../../css/r/rapwtibdy.css';
import '../../css/z/zjtswjbtp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="nh5vr0b3s"/><path class="rapwtibdy"/><path class="zjtswjbtp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:stroke-cap-round"} {...others} />);
}

export default Component;
