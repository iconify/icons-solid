import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b8xl3h-3e.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="b8xl3h-3e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:doska-light"} {...others} />);
}

export default Component;
