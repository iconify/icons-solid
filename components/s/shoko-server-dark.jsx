import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flmk1erry.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="flmk1erry"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:shoko-server-dark"} {...others} />);
}

export default Component;
