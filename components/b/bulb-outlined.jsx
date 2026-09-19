import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kf_l1cpme.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="kf_l1cpme"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:bulb-outlined"} {...others} />);
}

export default Component;
