import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yui9tm2fe.css';

const viewBox = {"width":2304,"height":1536};
const content = `<path class="yui9tm2fe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:cc-stripe"} {...others} />);
}

export default Component;
