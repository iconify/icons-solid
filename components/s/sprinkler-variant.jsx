import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mcfi8vkuc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mcfi8vkuc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:sprinkler-variant"} {...others} />);
}

export default Component;
