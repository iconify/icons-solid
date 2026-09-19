import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rinuwhlnp.css';
import '../../css/q/q97o_r-5j.css';
import '../../css/b/b5kg96bcb.css';
import '../../css/g/g-r-l4bpp.css';
import '../../css/z/zomcnnb8u.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rinuwhlnp"><ellipse class="q97o_r-5j"/><path class="b5kg96bcb"/><path class="g-r-l4bpp"/><path class="zomcnnb8u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:data-all"} {...others} />);
}

export default Component;
