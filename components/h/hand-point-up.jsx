import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kc_avxy5i.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="kc_avxy5i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-regular:hand-point-up"} {...others} />);
}

export default Component;
