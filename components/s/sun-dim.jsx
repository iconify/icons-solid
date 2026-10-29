import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zszdqcc-p.css';
import '../../css/k/kjl_gt_9x.css';
import '../../css/i/iwm2s8bwb.css';
import '../../css/i/i5cpxybyf.css';
import '../../css/e/ev1x7dbwr.css';
import '../../css/w/wm-cvgojq.css';
import '../../css/g/g9lt4ox8q.css';
import '../../css/c/cklpfwn0f.css';
import '../../css/w/wky4hkbyp.css';
import '../../css/t/t89ayuxij.css';
import '../../css/y/yfhgjbcvd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-shadow zszdqcc-p"/><path class="kjl_gt_9x wm-a"/><path class="iwm2s8bwb wm-a"/><path class="i5cpxybyf wm-a"/><path class="ev1x7dbwr wm-a"/><path class="wm-cvgojq wm-k"/><path class="g9lt4ox8q wm-k"/><path class="cklpfwn0f wm-k"/><path class="wky4hkbyp wm-k"/><path class="t89ayuxij wm-shine"/><path class="wm-k yfhgjbcvd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:sun-dim"} {...others} />);
}

export default Component;
