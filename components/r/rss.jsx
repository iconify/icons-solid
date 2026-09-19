import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/du0059b8y.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="du0059b8y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:rss"} {...others} />);
}

export default Component;
