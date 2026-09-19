import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n9qe-eb2q.css';
import '../../css/k/kf_l1cpme.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="n9qe-eb2q"/><path class="kf_l1cpme"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:bulb-twotone"} {...others} />);
}

export default Component;
