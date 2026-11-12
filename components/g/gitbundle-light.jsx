import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gdtm0qhix.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gdtm0qhix"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:gitbundle-light"} {...others} />);
}

export default Component;
