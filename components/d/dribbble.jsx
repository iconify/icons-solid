import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n26_2eg4e.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="n26_2eg4e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:dribbble"} {...others} />);
}

export default Component;
