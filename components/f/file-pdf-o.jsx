import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q4z-3_leu.css';

const viewBox = {"width":1536,"height":1792};
const content = `<path class="q4z-3_leu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:file-pdf-o"} {...others} />);
}

export default Component;
