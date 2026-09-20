import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x7upzrb1g.css';
import '../../css/n/n94t68b6z.css';
import '../../css/k/k_1_-sblr.css';
import '../../css/h/hd3wd_jdl.css';
import '../../css/x/x0i-pxbgv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="x7upzrb1g"/><path class="n94t68b6z"/><path class="k_1_-sblr"/><path class="hd3wd_jdl"/><path class="x0i-pxbgv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:hardcover"} {...others} />);
}

export default Component;
