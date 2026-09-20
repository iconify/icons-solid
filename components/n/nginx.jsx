import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qs9nrxbwo.css';
import '../../css/i/ifixufl1e.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qs9nrxbwo"/><path class="ifixufl1e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nginx"} {...others} />);
}

export default Component;
