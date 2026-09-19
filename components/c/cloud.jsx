import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ni-6x9bji.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ni-6x9bji"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:cloud"} {...others} />);
}

export default Component;
