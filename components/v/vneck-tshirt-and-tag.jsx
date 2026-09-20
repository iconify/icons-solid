import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f9du6swsh.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="f9du6swsh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:vneck-tshirt-and-tag"} {...others} />);
}

export default Component;
