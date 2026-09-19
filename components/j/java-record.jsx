import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j36ff-b8d.css';
import '../../css/q/qeixe-bjh.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="j36ff-b8d"/><path class="qeixe-bjh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:java-record"} {...others} />);
}

export default Component;
