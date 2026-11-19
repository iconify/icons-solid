import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l07hne7yb.css';
import '../../css/f/f2k14hb4i.css';
import '../../css/j/j0l-ykx4z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="l07hne7yb"/><path class="f2k14hb4i"/><path class="j0l-ykx4z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:currency-myr-circle"} {...others} />);
}

export default Component;
