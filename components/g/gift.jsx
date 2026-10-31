import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/u/u9p68b_jz.css';
import '../../css/l/lphzes20n.css';
import '../../css/b/bgtcaibmd.css';
import '../../css/o/o_msspbwn.css';
import '../../css/o/o-8rotbug.css';
import '../../css/g/g2dczlb9j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="u9p68b_jz wm-shadow"/><path class="lphzes20n wm-shadow"/><path class="bgtcaibmd"/><path class="o_msspbwn"/><path class="o-8rotbug"/><path class="g2dczlb9j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:gift"} {...others} />);
}

export default Component;
