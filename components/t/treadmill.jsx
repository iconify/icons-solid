import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ef4fuqwpe.css';
import '../../css/d/dwncepbcl.css';
import '../../css/f/fe47ev76c.css';
import '../../css/a/avv9u_bfv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ef4fuqwpe"/><path class="dwncepbcl"/><path class="fe47ev76c"/><path class="avv9u_bfv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:treadmill"} {...others} />);
}

export default Component;
