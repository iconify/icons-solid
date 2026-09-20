import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/svd2s_bjj.css';
import '../../css/e/ese12xb1h.css';
import '../../css/h/huatr0-xh.css';

const viewBox = {"width":63,"height":64};
const content = `<path class="svd2s_bjj"/><path class="ese12xb1h"/><path class="huatr0-xh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:i-hearing-assistance"} {...others} />);
}

export default Component;
