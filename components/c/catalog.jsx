import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eh06vnbum.css';
import '../../css/h/htce_l0gk.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="eh06vnbum"/><path class="htce_l0gk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:catalog"} {...others} />);
}

export default Component;
