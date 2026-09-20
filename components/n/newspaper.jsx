import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oi3a7acyt.css';
import '../../css/b/bjedjv8iv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oi3a7acyt"/><path class="bjedjv8iv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:newspaper"} {...others} />);
}

export default Component;
