import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vy4vzhewr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vy4vzhewr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:source-engine"} {...others} />);
}

export default Component;
