import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c3xbb8-vd.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="c3xbb8-vd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-align-layers-1-design-layer-layers-pile-stack"} {...others} />);
}

export default Component;
