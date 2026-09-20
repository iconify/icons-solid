import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h1fe2wnqk.css';

const viewBox = {"width":256,"height":168};
const content = `<path class="h1fe2wnqk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:cloudinary"} {...others} />);
}

export default Component;
