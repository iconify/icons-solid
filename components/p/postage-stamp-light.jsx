import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/br0ven8-n.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="br0ven8-n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:postage-stamp-light"} {...others} />);
}

export default Component;
