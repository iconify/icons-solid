import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m7bbkk8yo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m7bbkk8yo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:achievement"} {...others} />);
}

export default Component;
