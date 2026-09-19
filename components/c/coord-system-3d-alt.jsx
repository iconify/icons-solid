import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zx9bvc8de.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="zx9bvc8de"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:coord-system-3d-alt"} {...others} />);
}

export default Component;
