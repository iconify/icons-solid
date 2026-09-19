import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/e/eldoky0en.css';
import '../../css/x/xriq4xbwq.css';
import '../../css/h/hkuv9bcyz.css';
import '../../css/e/en1doqb4f.css';
import '../../css/a/a118c9-wg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><rect class="eldoky0en"/><rect class="xriq4xbwq"/><circle class="hkuv9bcyz"/><circle class="en1doqb4f"/><path class="a118c9-wg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:videocamera-one"} {...others} />);
}

export default Component;
