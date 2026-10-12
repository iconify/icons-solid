import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zxb18ppdc.css';
import '../../css/o/ohem1ccdv.css';
import '../../css/x/x51marank.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="zxb18ppdc"/><path class="ohem1ccdv"/><path class="x51marank"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:bricks-shield"} {...others} />);
}

export default Component;
