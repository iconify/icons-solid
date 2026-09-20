import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b6q28_uum.css';
import '../../css/q/q2kzgfbfr.css';
import '../../css/n/nyo26bcbd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="b6q28_uum"/><path class="q2kzgfbfr"/><path class="nyo26bcbd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:file-portal-dark"} {...others} />);
}

export default Component;
