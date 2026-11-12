import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pkqjrcc6k.css';
import '../../css/u/uy6molruc.css';
import '../../css/f/f29jxtg9l.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pkqjrcc6k"/><path class="uy6molruc"/><path class="f29jxtg9l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:reitti"} {...others} />);
}

export default Component;
