import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zl7z8j7sc.css';
import '../../css/f/fg6p2fbtz.css';

const viewBox = {"width":15,"height":16};
const content = `<path class="zl7z8j7sc"/><path class="fg6p2fbtz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:search"} {...others} />);
}

export default Component;
