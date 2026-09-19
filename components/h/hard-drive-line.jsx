import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hvr3rbc2o.css';
import '../../css/a/af73r7bby.css';
import '../../css/q/qzzl_8dsx.css';
import '../../css/z/zvqclrbzw.css';
import '../../css/a/ai0xkyb7w.css';
import '../../css/s/scti-6bce.css';
import '../../css/l/l_-eu-mih.css';
import '../../css/r/rsth83_rt.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-outline clr-i-outline-path-1 hvr3rbc2o"/><circle class="af73r7bby clr-i-outline clr-i-outline-path-2"/><circle class="clr-i-outline clr-i-outline-path-3 qzzl_8dsx"/><circle class="clr-i-outline clr-i-outline-path-4 zvqclrbzw"/><circle class="ai0xkyb7w clr-i-outline clr-i-outline-path-5"/><path class="clr-i-outline clr-i-outline-path-6 scti-6bce"/><path class="clr-i-outline clr-i-outline-path-7 l_-eu-mih"/><path class="clr-i-outline clr-i-outline-path-8 rsth83_rt"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:hard-drive-line"} {...others} />);
}

export default Component;
