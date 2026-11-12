import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0l9w0esz.css';
import '../../css/d/da7n23beg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="a0l9w0esz"/><path class="da7n23beg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:markstack-light"} {...others} />);
}

export default Component;
