import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kbv6d6uqd.css';
import '../../css/u/u27wnzbvk.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="kbv6d6uqd"/><path class="u27wnzbvk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:hi-hat-24"} {...others} />);
}

export default Component;
