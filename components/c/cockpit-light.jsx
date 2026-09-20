import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b7xf0gald.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="b7xf0gald"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:cockpit-light"} {...others} />);
}

export default Component;
