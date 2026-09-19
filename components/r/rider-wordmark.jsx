import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ryo6rdbxe.css';
import '../../css/s/szz0hprcy.css';
import '../../css/a/aoz5w9r-n.css';
import '../../css/s/sly8pxb1x.css';
import '../../css/x/xmur02b9p.css';
import '../../css/g/geu4vbhhe.css';
import '../../css/n/ncbgilbkd.css';
import '../../css/q/qk12qab1r.css';
import '../../css/z/zu67__b5g.css';

const viewBox = {"width":128,"height":128};
const content = `<defs><linearGradient id="SVGnSyNQd6E" x1="64.712" x2="39.849" y1="56.378" y2="2.753" gradientTransform="translate(.003 41.828)scale(.56677)" gradientUnits="userSpaceOnUse"><stop offset=".21" class="ryo6rdbxe"/><stop offset=".55" class="szz0hprcy"/></linearGradient><linearGradient id="SVGOeuDJdPD" x1="59.772" x2="1.067" y1="3.981" y2="62.687" gradientTransform="translate(.003 41.828)scale(.56677)" gradientUnits="userSpaceOnUse"><stop offset=".23" class="szz0hprcy"/><stop offset=".73" class="aoz5w9r-n"/></linearGradient></defs><path clip-rule="evenodd" class="sly8pxb1x"/><path class="xmur02b9p"/><path fill="url(#SVGnSyNQd6E)" class="geu4vbhhe"/><path fill="url(#SVGOeuDJdPD)" class="ncbgilbkd"/><path class="qk12qab1r"/><path class="zu67__b5g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:rider-wordmark"} {...others} />);
}

export default Component;
