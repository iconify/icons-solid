import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/otlbybqix.css';
import '../../css/n/nbsc69_8a.css';

const viewBox = {"width":128,"height":128};
const content = `<circle class="otlbybqix"/><path class="nbsc69_8a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:shotgrid"} {...others} />);
}

export default Component;
