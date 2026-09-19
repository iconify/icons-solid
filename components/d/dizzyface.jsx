import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vglgb9b7f.css';
import '../../css/o/ocb79kshn.css';
import '../../css/x/xutwwqb0x.css';
import '../../css/r/rcn56qi3j.css';
import '../../css/u/uj1cm2byu.css';
import '../../css/o/o9q3po3jq.css';
import '../../css/p/pnzmdacjg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vglgb9b7f"/><path class="ocb79kshn"/><path class="xutwwqb0x"/><path class="rcn56qi3j"/><path class="uj1cm2byu"/><path class="o9q3po3jq"/><path class="pnzmdacjg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:dizzyface"} {...others} />);
}

export default Component;
