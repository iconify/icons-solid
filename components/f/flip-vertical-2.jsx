import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr95f2b0l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pr95f2b0l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:flip-vertical-2"} {...others} />);
}

export default Component;
