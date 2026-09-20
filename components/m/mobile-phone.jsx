import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ae849gbxa.css';
import '../../css/p/pd9ir8bgp.css';
import '../../css/s/syrnbsj7s.css';
import '../../css/y/y2yxet4nz.css';
import '../../css/v/vrwg7cc1q.css';
import '../../css/d/d3w0zsbbj.css';
import '../../css/a/a28wmggdt.css';
import '../../css/s/s9kqtcb9c.css';
import '../../css/a/a4sgwmbnx.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="ae849gbxa"><path class="pd9ir8bgp"/><path class="syrnbsj7s"/><path class="y2yxet4nz"/></g><g class="vrwg7cc1q"><path class="d3w0zsbbj"/><path class="a28wmggdt"/><circle class="s9kqtcb9c"/><path class="a4sgwmbnx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:mobile-phone"} {...others} />);
}

export default Component;
