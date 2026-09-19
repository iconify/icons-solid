import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zw98ts_6a.css';

const viewBox = {"width":576,"height":512};
const content = `<path class="zw98ts_6a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-brands:connectdevelop"} {...others} />);
}

export default Component;
