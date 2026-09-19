import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mh_rcpr_l.css';

const viewBox = {"width":1024,"height":1792};
const content = `<path class="mh_rcpr_l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:map-pin"} {...others} />);
}

export default Component;
