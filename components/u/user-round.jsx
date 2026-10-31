import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/n/n051cfbkx.css';
import '../../css/c/chcthx55g.css';
import '../../css/z/zja9mv3nr.css';
import '../../css/u/utuopac-h.css';
import '../../css/o/om8rlzb6h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="n051cfbkx wm-shadow"/><path class="chcthx55g wm-shadow"/><path class="zja9mv3nr"/><path class="utuopac-h"/><path class="om8rlzb6h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:user-round"} {...others} />);
}

export default Component;
