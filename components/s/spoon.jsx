import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lt9f0cb0i.css';
import '../../css/l/lz7k7y3sv.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="lt9f0cb0i"/><path class="lz7k7y3sv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:spoon"} {...others} />);
}

export default Component;
