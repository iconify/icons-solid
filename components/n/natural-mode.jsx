import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/blyiy0b4o.css';
import '../../css/x/xvzaotb_b.css';
import '../../css/g/g0av7_f0k.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG9btaWbAY"><g class="blyiy0b4o"><path class="xvzaotb_b"/><path class="g0av7_f0k"/></g></mask></defs><path mask="url(#SVG9btaWbAY)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:natural-mode"} {...others} />);
}

export default Component;
