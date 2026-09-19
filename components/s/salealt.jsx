import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/px3jhzhnu.css';

const viewBox = {"width":1024,"height":1023};
const content = `<path class="px3jhzhnu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:salealt"} {...others} />);
}

export default Component;
