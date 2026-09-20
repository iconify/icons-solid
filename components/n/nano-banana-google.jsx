import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cjm9s1b5z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cjm9s1b5z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:nano-banana-google"} {...others} />);
}

export default Component;
