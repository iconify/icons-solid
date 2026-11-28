import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ruo-o8h7c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ruo-o8h7c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:podcast-play"} {...others} />);
}

export default Component;
