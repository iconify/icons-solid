import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d67a6723k.css';
import '../../css/q/qa-1pv6bo.css';
import '../../css/i/ir_7aj3dy.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="d67a6723k"/><circle class="qa-1pv6bo"/><circle class="ir_7aj3dy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:storage-request"} {...others} />);
}

export default Component;
