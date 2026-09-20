import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w-2gwjbcv.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="w-2gwjbcv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:lock-open"} {...others} />);
}

export default Component;
