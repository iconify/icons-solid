import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kxj4sybpu.css';

const viewBox = {"width":1025,"height":1026};
const content = `<path class="kxj4sybpu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:polygonlasso"} {...others} />);
}

export default Component;
