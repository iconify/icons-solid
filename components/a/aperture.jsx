import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mdvs7m46w.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="mdvs7m46w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"et:aperture"} {...others} />);
}

export default Component;
