import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cfg8bo1tv.css';

const viewBox = {"width":1025,"height":896};
const content = `<path class="cfg8bo1tv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:alignjustify"} {...others} />);
}

export default Component;
