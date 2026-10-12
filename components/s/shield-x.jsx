import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pi08lkb8v.css';
import '../../css/u/u4w3whd2n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="pi08lkb8v"/><path class="u4w3whd2n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:shield-x"} {...others} />);
}

export default Component;
