import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/papalo4pk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="papalo4pk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:aperture"} {...others} />);
}

export default Component;
