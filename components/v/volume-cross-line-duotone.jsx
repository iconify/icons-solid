import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/gktj-0bky.css';
import '../../css/d/dze0b5gur.css';
import '../../css/o/ojps6bbxn.css';
import '../../css/x/x2w9p6cxi.css';
import '../../css/r/rsrhfac5n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="gktj-0bky"/><path class="dze0b5gur"/><path class="ojps6bbxn"/><path class="x2w9p6cxi"/><path class="rsrhfac5n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:volume-cross-line-duotone"} {...others} />);
}

export default Component;
