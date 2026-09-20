import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rxp8pmb2q.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rxp8pmb2q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:autobrr-light"} {...others} />);
}

export default Component;
