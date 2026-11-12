import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gcj9e7b2y.css';
import '../../css/e/ea5zn2byz.css';
import '../../css/o/obja-xbfi.css';
import '../../css/o/ofhs6z3pm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gcj9e7b2y"/><path class="ea5zn2byz"/><path class="obja-xbfi"/><path class="ofhs6z3pm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:microsoft-word-light"} {...others} />);
}

export default Component;
