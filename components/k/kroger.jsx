import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b2tgcfa6m.css';
import '../../css/d/djx2wtber.css';
import '../../css/i/ife7vbbqx.css';
import '../../css/b/bwxcns22e.css';

const viewBox = {"width":95.1,"height":74.1};
const content = `<path class="b2tgcfa6m"/><ellipse class="djx2wtber"/><path class="ife7vbbqx"/><path class="bwxcns22e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:kroger"} {...others} />);
}

export default Component;
