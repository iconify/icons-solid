import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v31scrb0w.css';
import '../../css/s/sgn1aep-s.css';
import '../../css/u/ufg40xb6y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v31scrb0w"/><path class="sgn1aep-s"/><path class="ufg40xb6y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:spedometer-low-bold-duotone"} {...others} />);
}

export default Component;
