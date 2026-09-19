import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g6gzcks7d.css';
import '../../css/f/faefp84ld.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="g6gzcks7d"/><path class="faefp84ld"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:globe-earth"} {...others} />);
}

export default Component;
