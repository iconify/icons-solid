import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x3xd86b1m.css';
import '../../css/x/xz2__gk7f.css';
import '../../css/l/lj6ilvb4m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="x3xd86b1m"/><path class="xz2__gk7f"/><path class="lj6ilvb4m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:bug-off"} {...others} />);
}

export default Component;
