import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ow6ccdaev.css';
import '../../css/t/t1218ih7n.css';
import '../../css/l/l6j4bjmfq.css';
import '../../css/y/yndm5-cln.css';
import '../../css/d/dxd5tgbgh.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="ow6ccdaev"/><path class="t1218ih7n"/><path class="l6j4bjmfq"/><path class="yndm5-cln"/><path class="dxd5tgbgh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:christmas-tree"} {...others} />);
}

export default Component;
