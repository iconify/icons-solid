import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/en0dhbq2v.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="en0dhbq2v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:resize-both"} {...others} />);
}

export default Component;
