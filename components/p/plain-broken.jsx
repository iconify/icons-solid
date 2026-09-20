import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/phwbtjn9t.css';
import '../../css/x/xmfy6_bln.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="phwbtjn9t"/><path class="xmfy6_bln"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:plain-broken"} {...others} />);
}

export default Component;
