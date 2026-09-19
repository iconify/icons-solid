import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mqek1wu7r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mqek1wu7r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"guidance:care-staff-area"} {...others} />);
}

export default Component;
