import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r8aw24b0h.css';
import '../../css/t/tnv3g-b3r.css';
import '../../css/c/cduhi3biq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="r8aw24b0h"/><path class="tnv3g-b3r"/><path class="cduhi3biq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:qwik"} {...others} />);
}

export default Component;
