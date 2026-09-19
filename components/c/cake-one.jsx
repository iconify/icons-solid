import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/z/ziwosab9a.css';
import '../../css/x/xcel8mjtj.css';
import '../../css/r/rc5h_rlcn.css';
import '../../css/v/veaom2e6k.css';
import '../../css/e/ezjtdab6z.css';
import '../../css/k/ks2x0ybhf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGaGX12i7Y"><g class="rohhhzb0l"><path class="ziwosab9a"/><circle class="xcel8mjtj"/><path class="rc5h_rlcn"/><path class="veaom2e6k"/><path class="ezjtdab6z"/><path class="ks2x0ybhf"/></g></mask></defs><path mask="url(#SVGaGX12i7Y)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:cake-one"} {...others} />);
}

export default Component;
