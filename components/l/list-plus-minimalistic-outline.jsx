import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y43hyfyoj.css';
import '../../css/l/lydkuv2ht.css';
import '../../css/e/ewevmsv6i.css';
import '../../css/o/owgp34bwe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y43hyfyoj"/><path class="lydkuv2ht"/><path class="ewevmsv6i"/><path class="owgp34bwe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:list-plus-minimalistic-outline"} {...others} />);
}

export default Component;
