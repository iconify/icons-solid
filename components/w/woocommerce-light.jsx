import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e4e7os4sg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="e4e7os4sg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:woocommerce-light"} {...others} />);
}

export default Component;
