import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/miihutl4c.css';

const viewBox = {"width":496,"height":512};
const content = `<path class="miihutl4c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:kiss-beam"} {...others} />);
}

export default Component;
