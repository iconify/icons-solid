import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nqkkm389q.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nqkkm389q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ublock-origin-dark"} {...others} />);
}

export default Component;
