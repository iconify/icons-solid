import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zlkquaciy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zlkquaciy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:sd-card-mini-line"} {...others} />);
}

export default Component;
