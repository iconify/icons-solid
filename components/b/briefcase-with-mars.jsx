import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c3_wh4bvb.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="c3_wh4bvb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:briefcase-with-mars"} {...others} />);
}

export default Component;
