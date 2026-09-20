import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h7_3dwbia.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="h7_3dwbia"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:row-height-s-outline"} {...others} />);
}

export default Component;
