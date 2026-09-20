import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ftd8t6bpl.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ftd8t6bpl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:linejoin-bevel-outline"} {...others} />);
}

export default Component;
