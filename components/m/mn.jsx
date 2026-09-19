import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dmuhxn_ob.css';
import '../../css/s/skqfwtcpb.css';
import '../../css/r/rceakbbhv.css';
import '../../css/t/txfom6b-h.css';
import '../../css/d/dtz3229za.css';

const viewBox = {"width":32,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="dmuhxn_ob"/><path clip-rule="evenodd" class="skqfwtcpb"/><path clip-rule="evenodd" class="rceakbbhv"/><path class="txfom6b-h"/><path clip-rule="evenodd" class="dtz3229za"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flagpack:mn"} {...others} />);
}

export default Component;
