import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p-yry3tfi.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="p-yry3tfi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:share-alt-square"} {...others} />);
}

export default Component;
