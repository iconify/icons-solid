import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k3o9fsq7y.css';
import '../../css/j/j4njxhbrr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="k3o9fsq7y"/><path class="j4njxhbrr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:gdms-dark"} {...others} />);
}

export default Component;
