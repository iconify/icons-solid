import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/odg8d7b5z.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="odg8d7b5z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:musical-notes"} {...others} />);
}

export default Component;
