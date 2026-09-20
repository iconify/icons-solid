import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t6fzm2b7v.css';
import '../../css/l/luua7ozmy.css';
import '../../css/e/ebj8f9bpd.css';

const viewBox = {"width":24,"height":24};
const content = `<rect class="t6fzm2b7v"/><rect class="luua7ozmy"/><rect class="ebj8f9bpd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:battery-low-duotone"} {...others} />);
}

export default Component;
