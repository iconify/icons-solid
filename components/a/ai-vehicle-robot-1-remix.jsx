import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ypmxq8cpd.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ypmxq8cpd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:ai-vehicle-robot-1-remix"} {...others} />);
}

export default Component;
