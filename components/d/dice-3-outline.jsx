import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o1u0azxay.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o1u0azxay"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:dice-3-outline"} {...others} />);
}

export default Component;
