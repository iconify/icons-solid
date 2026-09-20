import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ks_24obqv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ks_24obqv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:moon-star"} {...others} />);
}

export default Component;
