import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p9rhm9n5k.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="p9rhm9n5k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:airtrail-dark"} {...others} />);
}

export default Component;
