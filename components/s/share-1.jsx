import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/evarvxj2b.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="evarvxj2b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"subway:share-1"} {...others} />);
}

export default Component;
