import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gbjl5x_qp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gbjl5x_qp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:forte-light"} {...others} />);
}

export default Component;
