import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vkftwccsp.css';
import '../../css/b/bvk3h70eg.css';
import '../../css/g/gjx8-pb-v.css';

const viewBox = {"width":10,"height":16};
const content = `<path class="vkftwccsp"/><path class="bvk3h70eg"/><path class="gjx8-pb-v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:ethereum"} {...others} />);
}

export default Component;
