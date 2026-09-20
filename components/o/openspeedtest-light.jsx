import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f6b9k4bpd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="f6b9k4bpd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:openspeedtest-light"} {...others} />);
}

export default Component;
