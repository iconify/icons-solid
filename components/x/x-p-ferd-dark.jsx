import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ys6mk7hdo.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ys6mk7hdo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:x-p-ferd-dark"} {...others} />);
}

export default Component;
