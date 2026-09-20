import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lm1y5sbzo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lm1y5sbzo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:puzzle-heart"} {...others} />);
}

export default Component;
