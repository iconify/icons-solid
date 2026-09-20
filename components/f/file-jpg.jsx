import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/th0kx1-kp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="th0kx1-kp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uiw:file-jpg"} {...others} />);
}

export default Component;
