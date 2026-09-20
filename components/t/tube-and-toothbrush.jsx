import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fpds9sb-v.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="fpds9sb-v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:tube-and-toothbrush"} {...others} />);
}

export default Component;
