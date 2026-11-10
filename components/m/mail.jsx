import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rz7ip6tjn.css';
import '../../css/n/nabrzrbgg.css';
import '../../css/w/wv3mgdgqc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rz7ip6tjn"/><path class="nabrzrbgg"/><path class="wv3mgdgqc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:mail"} {...others} />);
}

export default Component;
