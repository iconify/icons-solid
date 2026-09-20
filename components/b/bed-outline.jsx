import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a6d0cu9gi.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="a6d0cu9gi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:bed-outline"} {...others} />);
}

export default Component;
