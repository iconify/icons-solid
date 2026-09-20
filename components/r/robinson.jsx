import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/loedw3efo.css';
import '../../css/f/fas83m7xm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="loedw3efo"/><path class="fas83m7xm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:robinson"} {...others} />);
}

export default Component;
