import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s7ex8kgyi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s7ex8kgyi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:cannabis-leaf"} {...others} />);
}

export default Component;
