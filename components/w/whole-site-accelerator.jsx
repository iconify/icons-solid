import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/m/m5wvuubqr.css';
import '../../css/w/wxql34b1d.css';
import '../../css/j/jp3jf-btd.css';
import '../../css/n/nkvmbcb5h.css';
import '../../css/f/f08pkdblx.css';
import '../../css/v/vdhgeqfxw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGgdX7pc9A"><g class="rohhhzb0l"><circle class="m5wvuubqr"/><circle class="wxql34b1d"/><circle class="jp3jf-btd"/><circle class="nkvmbcb5h"/><path class="f08pkdblx"/><path class="vdhgeqfxw"/></g></mask></defs><path mask="url(#SVGgdX7pc9A)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:whole-site-accelerator"} {...others} />);
}

export default Component;
