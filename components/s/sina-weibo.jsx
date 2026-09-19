import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k-hm_lb3s.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="k-hm_lb3s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:sina-weibo"} {...others} />);
}

export default Component;
