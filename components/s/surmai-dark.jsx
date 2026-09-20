import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/owv36ushu.css';
import '../../css/a/a0a2rfb-c.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="owv36ushu"/><path class="a0a2rfb-c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:surmai-dark"} {...others} />);
}

export default Component;
