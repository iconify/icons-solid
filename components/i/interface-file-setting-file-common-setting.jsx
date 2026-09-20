import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/xq22orswi.css';
import '../../css/t/t0_glhyss.css';
import '../../css/y/ym_p6zbdr.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="xq22orswi"/><path class="t0_glhyss"/><circle class="ym_p6zbdr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-file-setting-file-common-setting"} {...others} />);
}

export default Component;
