import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nk064txyy.css';
import '../../css/j/jz4ibqfjc.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="nk064txyy"/><path class="jz4ibqfjc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:our-shopping-list-light"} {...others} />);
}

export default Component;
