import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xrqlj2b2q.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="xrqlj2b2q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:share-alt"} {...others} />);
}

export default Component;
