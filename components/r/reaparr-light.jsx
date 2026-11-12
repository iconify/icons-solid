import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ch-5d0oph.css';
import '../../css/n/ndg-4phim.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ch-5d0oph"/><path class="ndg-4phim"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:reaparr-light"} {...others} />);
}

export default Component;
