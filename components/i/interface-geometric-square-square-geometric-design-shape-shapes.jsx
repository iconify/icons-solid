import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bse-cb6-t.css';

const viewBox = {"width":14,"height":14};
const content = `<rect class="bse-cb6-t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-geometric-square-square-geometric-design-shape-shapes"} {...others} />);
}

export default Component;
