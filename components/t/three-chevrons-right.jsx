import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jc7pk4nsr.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="jc7pk4nsr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:three-chevrons-right"} {...others} />);
}

export default Component;
