import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vs2qkn-bz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vs2qkn-bz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-outline:chart-bar-square"} {...others} />);
}

export default Component;
