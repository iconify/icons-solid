import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yp0s7ccec.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yp0s7ccec"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:litlyx"} {...others} />);
}

export default Component;
