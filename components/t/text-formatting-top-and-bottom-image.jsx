import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n2_3kdbzm.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="n2_3kdbzm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:text-formatting-top-and-bottom-image"} {...others} />);
}

export default Component;
