import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uynm4kapm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uynm4kapm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:lightning-bolt"} {...others} />);
}

export default Component;
