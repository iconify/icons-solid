import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kudk1ganc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kudk1ganc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:mobilizon-light"} {...others} />);
}

export default Component;
