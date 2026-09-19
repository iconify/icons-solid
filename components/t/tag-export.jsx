import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k87mgcena.css';
import '../../css/h/hwg0k-kmb.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="k87mgcena"/><path class="hwg0k-kmb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:tag-export"} {...others} />);
}

export default Component;
