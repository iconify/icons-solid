import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p26q6d9ek.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="p26q6d9ek"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:upload-success"} {...others} />);
}

export default Component;
