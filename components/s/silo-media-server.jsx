import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ew-sr1mcj.css';
import '../../css/m/my_ftigmx.css';
import '../../css/w/w1-6qwzkf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ew-sr1mcj"/><path class="my_ftigmx"/><path class="w1-6qwzkf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:silo-media-server"} {...others} />);
}

export default Component;
