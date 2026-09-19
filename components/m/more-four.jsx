import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rinuwhlnp.css';
import '../../css/v/vnpxrmbyc.css';
import '../../css/c/c_zobnb3y.css';
import '../../css/y/y__yymjkj.css';
import '../../css/y/yiqfahr8e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rinuwhlnp"><rect transform="rotate(-45 17 11)" class="vnpxrmbyc"/><rect transform="rotate(-45 30 24)" class="c_zobnb3y"/><rect transform="rotate(-45 4 24)" class="y__yymjkj"/><rect transform="rotate(-45 17 37)" class="yiqfahr8e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:more-four"} {...others} />);
}

export default Component;
