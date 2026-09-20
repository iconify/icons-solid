import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p8a2m6m6s.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="p8a2m6m6s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:onwatch-dark"} {...others} />);
}

export default Component;
