import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/u/uflzh1b8g.css';
import '../../css/b/bihzuwyoc.css';
import '../../css/w/w76eqmxrl.css';
import '../../css/d/dmzxlrb1i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="uflzh1b8g wm-shadow"/><path class="bihzuwyoc wm-shadow"/><path class="w76eqmxrl"/><path class="dmzxlrb1i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:trending-down"} {...others} />);
}

export default Component;
