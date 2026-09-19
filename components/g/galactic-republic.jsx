import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/si7_7aceq.css';

const viewBox = {"width":496,"height":512};
const content = `<path class="si7_7aceq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-brands:galactic-republic"} {...others} />);
}

export default Component;
