import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l5lo8smcr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l5lo8smcr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-outline:cloud-arrow-up"} {...others} />);
}

export default Component;
