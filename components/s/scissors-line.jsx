import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/clequrizn.css';
import '../../css/e/ezfv8tbmt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="clequrizn"/><path class="ezfv8tbmt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:scissors-line"} {...others} />);
}

export default Component;
