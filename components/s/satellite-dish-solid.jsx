import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hdx6upobh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hdx6upobh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:satellite-dish-solid"} {...others} />);
}

export default Component;
