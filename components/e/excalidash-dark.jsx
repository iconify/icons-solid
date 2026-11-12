import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bxnmy9bde.css';
import '../../css/m/mjttu00lo.css';
import '../../css/g/gmago3blo.css';
import '../../css/x/x-mqmdlpz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bxnmy9bde"/><path class="mjttu00lo"/><path class="gmago3blo"/><path class="x-mqmdlpz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:excalidash-dark"} {...others} />);
}

export default Component;
