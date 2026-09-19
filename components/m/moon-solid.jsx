import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dvw6d3hwb.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="dvw6d3hwb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:moon-solid"} {...others} />);
}

export default Component;
