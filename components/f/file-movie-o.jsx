import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l5i3wzbfe.css';

const viewBox = {"width":1536,"height":1792};
const content = `<path class="l5i3wzbfe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:file-movie-o"} {...others} />);
}

export default Component;
