import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hi_sajbdp.css';
import '../../css/x/xk7ze-bqa.css';

const viewBox = {"width":18,"height":16};
const content = `<path class="hi_sajbdp"/><path class="xk7ze-bqa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icomoon-free:images"} {...others} />);
}

export default Component;
