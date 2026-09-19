import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ya6rrexwn.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ya6rrexwn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:hand-thumb-down-20-solid"} {...others} />);
}

export default Component;
