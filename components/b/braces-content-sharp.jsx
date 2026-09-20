import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k1y6j3b9w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k1y6j3b9w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:braces-content-sharp"} {...others} />);
}

export default Component;
