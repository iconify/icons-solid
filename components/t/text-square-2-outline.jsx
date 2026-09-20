import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/atcd-6o6g.css';
import '../../css/h/hlwg4740c.css';
import '../../css/g/g2f0sqbvn.css';
import '../../css/i/iy0w9djnl.css';
import '../../css/u/u5i9gib1e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="atcd-6o6g"/><path class="hlwg4740c"/><path class="g2f0sqbvn"/><path class="iy0w9djnl"/><path class="u5i9gib1e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:text-square-2-outline"} {...others} />);
}

export default Component;
