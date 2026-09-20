import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eh582hbel.css';
import '../../css/e/e6zc0ccud.css';
import '../../css/b/bvqr90b7l.css';
import '../../css/f/fsaxo7b-r.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="eh582hbel"/><path class="e6zc0ccud"/><path class="bvqr90b7l"/><path class="fsaxo7b-r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:streamlink"} {...others} />);
}

export default Component;
