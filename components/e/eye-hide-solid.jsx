import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/izt-xbfer.css';
import '../../css/b/buyojelvy.css';
import '../../css/q/qk1bvjeqe.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-solid clr-i-solid-path-1 izt-xbfer"/><path class="buyojelvy clr-i-solid clr-i-solid-path-2"/><path class="clr-i-solid clr-i-solid-path-3 qk1bvjeqe"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:eye-hide-solid"} {...others} />);
}

export default Component;
