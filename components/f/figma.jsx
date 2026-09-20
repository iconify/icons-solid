import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/am7ko-blv.css';
import '../../css/z/zft29j7rf.css';
import '../../css/y/yzz5h13jf.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="am7ko-blv"/><path class="zft29j7rf"/><path class="yzz5h13jf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:figma"} {...others} />);
}

export default Component;
