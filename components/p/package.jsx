import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t7pe5lb-q.css';
import '../../css/v/vftrwmb7k.css';
import '../../css/w/wap9xptbj.css';
import '../../css/o/oubds8-hb.css';
import '../../css/v/vdeaqgblb.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/s/sd9n_pkxi.css';
import '../../css/w/w8h0q3t7v.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="t7pe5lb-q"/><path class="vftrwmb7k"/><path class="wap9xptbj"/><path class="oubds8-hb"/><path class="vdeaqgblb"/><g class="jn8qy4bru"><path class="sd9n_pkxi"/><path class="w8h0q3t7v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:package"} {...others} />);
}

export default Component;
