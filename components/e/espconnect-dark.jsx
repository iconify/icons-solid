import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/etg9crbrk.css';
import '../../css/i/ipz9c_5nj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="etg9crbrk"/><path class="ipz9c_5nj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:espconnect-dark"} {...others} />);
}

export default Component;
