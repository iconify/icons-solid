import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oyrr-jbcs.css';

const viewBox = {"width":496,"height":512};
const content = `<path class="oyrr-jbcs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-regular:compass"} {...others} />);
}

export default Component;
