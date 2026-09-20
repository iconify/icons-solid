import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rl33snbpg.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="rl33snbpg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:road-solid"} {...others} />);
}

export default Component;
