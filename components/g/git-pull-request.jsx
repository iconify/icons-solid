import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/v/vn9btab9e.css';
import '../../css/a/af34vhfpw.css';
import '../../css/h/h18lq-uwn.css';
import '../../css/t/to6psxsai.css';
import '../../css/d/dzy0ndbdi.css';
import '../../css/l/lkbb3qb2g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="vn9btab9e wm-shadow"/><path class="af34vhfpw wm-shadow"/><path class="h18lq-uwn"/><path class="to6psxsai"/><path class="dzy0ndbdi"/><path class="lkbb3qb2g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:git-pull-request"} {...others} />);
}

export default Component;
