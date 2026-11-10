import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/raijdkbtr.css';
import '../../css/x/xvulmum9n.css';
import '../../css/k/k1l0ftbhb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="raijdkbtr"/><path class="xvulmum9n"/><path class="k1l0ftbhb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:dice-four"} {...others} />);
}

export default Component;
