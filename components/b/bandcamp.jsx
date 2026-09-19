import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lctjxf-_e.css';
import '../../css/f/fjc_j-bcf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lctjxf-_e"/><path class="fjc_j-bcf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:bandcamp"} {...others} />);
}

export default Component;
