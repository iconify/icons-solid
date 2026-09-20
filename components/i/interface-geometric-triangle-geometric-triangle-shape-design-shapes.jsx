import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gs5c1cbwx.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="gs5c1cbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-geometric-triangle-geometric-triangle-shape-design-shapes"} {...others} />);
}

export default Component;
