import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qtybzhb-n.css';
import '../../css/z/zj-nl9jzd.css';
import '../../css/u/uui29w-fo.css';
import '../../css/c/csqz0zb3f.css';
import '../../css/z/z92hplb_m.css';
import '../../css/q/qni_clbgy.css';
import '../../css/x/xlbr06yrb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGWfyjLeYS"><g class="ft5dv1b6b"><path class="qtybzhb-n"/><path class="zj-nl9jzd"/><circle class="uui29w-fo"/><circle class="csqz0zb3f"/><circle class="z92hplb_m"/><circle class="qni_clbgy"/><path class="xlbr06yrb"/></g></mask></defs><path mask="url(#SVGWfyjLeYS)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:oscillator"} {...others} />);
}

export default Component;
