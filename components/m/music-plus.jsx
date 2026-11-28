import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/couo1tbxh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="couo1tbxh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:music-plus"} {...others} />);
}

export default Component;
