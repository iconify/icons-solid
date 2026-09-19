import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o0rq71e6h.css';
import '../../css/v/vk3_t0hpz.css';
import '../../css/f/fuo0uab3h.css';
import '../../css/s/switkv-0r.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-solid--alerted clr-i-solid-path-1--alerted o0rq71e6h"/><path class="clr-i-solid--alerted clr-i-solid-path-2--alerted vk3_t0hpz"/><path class="clr-i-solid--alerted clr-i-solid-path-3--alerted fuo0uab3h"/><path class="clr-i-alert clr-i-solid--alerted clr-i-solid-path-4--alerted switkv-0r"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:tags-solid-alerted"} {...others} />);
}

export default Component;
