import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hj5k-rjmc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hj5k-rjmc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:calibre-web"} {...others} />);
}

export default Component;
