import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j09701bge.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="j09701bge"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:decent-work-and-economic-growth-solid"} {...others} />);
}

export default Component;
