import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/way8m64gv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="way8m64gv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nodecast-tv-dark"} {...others} />);
}

export default Component;
