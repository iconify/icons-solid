import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f_jj5jfvq.css';
import '../../css/l/lrth8l6xz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="f_jj5jfvq"/><path class="lrth8l6xz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:rancher-hypper"} {...others} />);
}

export default Component;
