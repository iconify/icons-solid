import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xs1r29bga.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xs1r29bga"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:flight-takeoff-line"} {...others} />);
}

export default Component;
