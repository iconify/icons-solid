import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f32j-zrdv.css';
import '../../css/t/t_s3ty_ue.css';
import '../../css/f/f-nfbsbjy.css';
import '../../css/l/l7yuwkycl.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="f32j-zrdv"/><path class="t_s3ty_ue"/><path class="f-nfbsbjy"/><path class="l7yuwkycl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:tsil"} {...others} />);
}

export default Component;
