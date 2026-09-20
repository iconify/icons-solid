import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g26hbu.css';
import '../../css/n/n9l1ky.css';
import '../../css/t/t5pxry.css';
import '../../css/u/uj17_n.css';
import '../../css/j/jnqe1f.css';
import '../../css/o/oxx-om.css';
import '../../css/b/botfzx.css';
import '../../css/g/gd_4-q.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-70.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/d/d-4c0-hc.css';
import '../../css/d/d-i58k3z.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGciaTXcmF"><path class="g26hbu n9l1ky t5pxry"/><path class="g26hbu uj17_n"/><path class="jnqe1f oxx-om t5pxry"/></mask></defs><path mask="url(#SVGciaTXcmF)" class="botfzx"/><path class="gd_4-q jnqe1f t5pxry"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:tablet-off-twotone"} {...others} />);
}

export default Component;
