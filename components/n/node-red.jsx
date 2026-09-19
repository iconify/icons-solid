import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/digtmc1gc.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="digtmc1gc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:node-red"} {...others} />);
}

export default Component;
