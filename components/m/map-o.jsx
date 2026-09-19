import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u42uzwbek.css';

const viewBox = {"width":2048,"height":1792};
const content = `<path class="u42uzwbek"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:map-o"} {...others} />);
}

export default Component;
