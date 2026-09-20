import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jz8egfbsi.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="jz8egfbsi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:bag-with-percent"} {...others} />);
}

export default Component;
