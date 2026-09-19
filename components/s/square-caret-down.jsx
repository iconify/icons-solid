import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ln8uiccjr.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="ln8uiccjr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-regular:square-caret-down"} {...others} />);
}

export default Component;
