import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zh95nccwf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zh95nccwf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:arrow-turn-right-down-expressive"} {...others} />);
}

export default Component;
