import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nch_dfbxs.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nch_dfbxs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:th-list"} {...others} />);
}

export default Component;
