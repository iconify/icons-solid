import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tze1n8bro.css';

const viewBox = {"width":1024,"height":614};
const content = `<path class="tze1n8bro"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:flickrthree"} {...others} />);
}

export default Component;
