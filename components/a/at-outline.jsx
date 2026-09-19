import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nnvjrjbfl.css';
import '../../css/o/o7x01qbdk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nnvjrjbfl"/><path class="o7x01qbdk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:at-outline"} {...others} />);
}

export default Component;
