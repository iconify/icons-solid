import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r61s8fx5b.css';

const viewBox = {"width":1024,"height":960};
const content = `<path class="r61s8fx5b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:reddit"} {...others} />);
}

export default Component;
