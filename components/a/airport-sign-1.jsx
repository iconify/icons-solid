import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mxt3-pber.css';
import '../../css/k/k18y-k1ul.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mxt3-pber"/><path class="k18y-k1ul"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:airport-sign-1"} {...others} />);
}

export default Component;
