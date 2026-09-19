import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/czz6sgb7r.css';
import '../../css/s/sas08684b.css';
import '../../css/l/lp4ys3b0g.css';
import '../../css/l/l33609ffe.css';
import '../../css/c/c29vxwbvx.css';
import '../../css/e/ezw4iworg.css';
import '../../css/r/ro7zl-seg.css';
import '../../css/b/bzcoyyo7p.css';
import '../../css/w/w_dobmu8s.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="czz6sgb7r"/><path class="sas08684b"/><path class="lp4ys3b0g"/><circle class="l33609ffe"/><circle class="c29vxwbvx"/><path class="ezw4iworg"/><path class="ro7zl-seg"/><path class="bzcoyyo7p"/><path class="w_dobmu8s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:printer"} {...others} />);
}

export default Component;
