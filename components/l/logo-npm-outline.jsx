import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g8zw34-dy.css';
import '../../css/d/d84_2zbcn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="g8zw34-dy"/><path class="d84_2zbcn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:logo-npm-outline"} {...others} />);
}

export default Component;
