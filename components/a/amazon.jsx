import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/gtu5jma0d.css';
import '../../css/z/z85hs19cn.css';
import '../../css/x/xmrfcvbfw.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="gtu5jma0d"/><path class="z85hs19cn"/><path class="xmrfcvbfw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:amazon"} {...others} />);
}

export default Component;
