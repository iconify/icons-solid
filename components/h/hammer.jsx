import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bkqp91bjv.css';
import '../../css/m/muvhxc84j.css';
import '../../css/y/yb62kaclv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bkqp91bjv"/><path class="muvhxc84j"/><path class="yb62kaclv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:hammer"} {...others} />);
}

export default Component;
