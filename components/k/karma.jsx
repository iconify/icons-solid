import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/om4mwxbqv.css';
import '../../css/i/i4ou1xbhh.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="om4mwxbqv"/><path class="i4ou1xbhh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:karma"} {...others} />);
}

export default Component;
