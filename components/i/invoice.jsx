import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/piyvq7btz.css';
import '../../css/n/nuevv6bsq.css';
import '../../css/t/ta5yezbzg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="piyvq7btz"/><path class="nuevv6bsq"/><path class="ta5yezbzg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:invoice"} {...others} />);
}

export default Component;
