import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t5omk_79g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t5omk_79g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:pin-distance-line"} {...others} />);
}

export default Component;
