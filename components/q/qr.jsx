import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/v/v5_hwz58m.css';
import '../../css/n/nljoyacmt.css';
import '../../css/w/wop--n-hn.css';
import '../../css/v/v571rcbuc.css';
import '../../css/p/p-_grn9do.css';
import '../../css/w/w0w2cjz6u.css';
import '../../css/c/cyitd_bbv.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="gopnm44um"><rect class="v5_hwz58m"/><rect class="nljoyacmt"/><rect class="wop--n-hn"/><rect class="v571rcbuc"/><rect class="p-_grn9do"/><rect class="w0w2cjz6u"/><path class="cyitd_bbv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:qr"} {...others} />);
}

export default Component;
