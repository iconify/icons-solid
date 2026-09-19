import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cw5iv4tez.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="cw5iv4tez"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:server-fault"} {...others} />);
}

export default Component;
