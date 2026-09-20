import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fo8oo-9-t.css';
import '../../css/h/h3xx9zf8k.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fo8oo-9-t"/><path class="h3xx9zf8k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:profilarr-light"} {...others} />);
}

export default Component;
