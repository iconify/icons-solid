import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c5zmkz2sw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="c5zmkz2sw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:eigenfocus-dark"} {...others} />);
}

export default Component;
