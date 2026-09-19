import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bo-i9d5nt.css';
import '../../css/g/g5gysrbik.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="bo-i9d5nt"/><path class="g5gysrbik"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:direction-curve-filled"} {...others} />);
}

export default Component;
