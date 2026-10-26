import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zlnwz7iwx.css';

const viewBox = {"width":303,"height":303};
const content = `<path class="zlnwz7iwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:apollodotio"} {...others} />);
}

export default Component;
