import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a4y3k-p3k.css';
import '../../css/n/nv3l533ys.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="a4y3k-p3k"/><path class="nv3l533ys"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:opendns"} {...others} />);
}

export default Component;
