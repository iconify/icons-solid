import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x84co2boo.css';
import '../../css/p/p2it8lbfv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="x84co2boo"/><path class="p2it8lbfv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:bluetooth"} {...others} />);
}

export default Component;
