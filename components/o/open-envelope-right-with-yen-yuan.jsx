import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x3q3sr33k.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="x3q3sr33k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:open-envelope-right-with-yen-yuan"} {...others} />);
}

export default Component;
