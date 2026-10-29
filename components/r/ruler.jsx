import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o2fmx3btv.css';
import '../../css/l/lbtfpkb_d.css';
import '../../css/v/v33t17bvs.css';
import '../../css/l/lbwhynrhx.css';
import '../../css/r/ri2ku1xbt.css';
import '../../css/q/qtdu0-x9o.css';
import '../../css/x/xllg0ldqe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o2fmx3btv wm-shadow"/><path class="lbtfpkb_d wm-k"/><path class="v33t17bvs wm-k"/><path class="lbwhynrhx wm-k"/><path class="ri2ku1xbt wm-k"/><path class="qtdu0-x9o wm-shine"/><path class="wm-a xllg0ldqe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:ruler"} {...others} />);
}

export default Component;
