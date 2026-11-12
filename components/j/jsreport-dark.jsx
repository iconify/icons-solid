import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hnxapn8mh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hnxapn8mh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:jsreport-dark"} {...others} />);
}

export default Component;
