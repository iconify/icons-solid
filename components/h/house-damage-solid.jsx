import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o43r2_blu.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="o43r2_blu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:house-damage-solid"} {...others} />);
}

export default Component;
