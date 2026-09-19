import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sj5qwhlnr.css';

const viewBox = {"width":1472,"height":1536};
const content = `<path class="sj5qwhlnr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:moon-o"} {...others} />);
}

export default Component;
