import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/crtk_e-gx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="crtk_e-gx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:kick-scooter-linear"} {...others} />);
}

export default Component;
