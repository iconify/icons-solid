import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/slzdfi61y.css';

const viewBox = {"width":1025,"height":1023};
const content = `<path class="slzdfi61y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:imac"} {...others} />);
}

export default Component;
