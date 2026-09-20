import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ok4g82-ws.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ok4g82-ws"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:hdhomerun-dark"} {...others} />);
}

export default Component;
