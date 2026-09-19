import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gfggz2bbq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gfggz2bbq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:square-full"} {...others} />);
}

export default Component;
