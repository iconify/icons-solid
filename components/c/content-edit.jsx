import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mmmt4yb1s.css';
import '../../css/o/omfzgbbsi.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="mmmt4yb1s"/><path class="omfzgbbsi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:content-edit"} {...others} />);
}

export default Component;
