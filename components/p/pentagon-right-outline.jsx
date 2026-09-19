import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p1dpvyb-s.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="p1dpvyb-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:pentagon-right-outline"} {...others} />);
}

export default Component;
