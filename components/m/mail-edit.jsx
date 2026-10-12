import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/ftjzrub9c.css';
import '../../css/n/n0n2j42-l.css';
import '../../css/p/p74anlbhw.css';
import '../../css/l/loudukbom.css';
import '../../css/z/zytchvkpo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ftjzrub9c"/><path class="n0n2j42-l"/><path class="p74anlbhw"/><rect transform="rotate(-45 29.99 -16.96)scale(1 -1)" class="loudukbom"/><path class="zytchvkpo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:mail-edit"} {...others} />);
}

export default Component;
