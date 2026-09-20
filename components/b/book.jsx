import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z_qsx6bnj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="z_qsx6bnj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"subway:book"} {...others} />);
}

export default Component;
