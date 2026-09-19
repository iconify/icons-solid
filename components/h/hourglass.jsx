import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aqv_ljb2n.css';

const viewBox = {"width":384,"height":512};
const content = `<path class="aqv_ljb2n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:hourglass"} {...others} />);
}

export default Component;
