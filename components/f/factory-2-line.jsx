import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y71zoee3k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y71zoee3k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:factory-2-line"} {...others} />);
}

export default Component;
