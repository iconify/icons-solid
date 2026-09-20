import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bmx8l16wx.css';
import '../../css/q/qr8ob5b7o.css';
import '../../css/y/y19q9r0gu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="bmx8l16wx"/><path clip-rule="evenodd" class="qr8ob5b7o"/><path class="y19q9r0gu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:sale"} {...others} />);
}

export default Component;
