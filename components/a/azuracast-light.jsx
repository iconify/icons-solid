import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pefbi7b3h.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pefbi7b3h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:azuracast-light"} {...others} />);
}

export default Component;
