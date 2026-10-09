import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uyzyqw1hp.css';
import '../../css/k/ko4o_xbkk.css';
import '../../css/k/k_3l723fm.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="uyzyqw1hp"/><path class="ko4o_xbkk"/><path class="k_3l723fm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:leaf-check-20-bold"} {...others} />);
}

export default Component;
