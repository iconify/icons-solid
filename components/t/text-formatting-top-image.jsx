import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y3xf5ebcd.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="y3xf5ebcd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:text-formatting-top-image"} {...others} />);
}

export default Component;
