import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t8-j1zyzn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="t8-j1zyzn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:apple-tv-light"} {...others} />);
}

export default Component;
