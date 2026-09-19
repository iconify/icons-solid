import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fp7x4_pfc.css';

const viewBox = {"width":1536,"height":1792};
const content = `<path class="fp7x4_pfc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:file-code-o"} {...others} />);
}

export default Component;
