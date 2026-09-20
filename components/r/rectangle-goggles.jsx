import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yfc5xouoc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yfc5xouoc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:rectangle-goggles"} {...others} />);
}

export default Component;
