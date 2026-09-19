import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/erflbz0dw.css';

const viewBox = {"width":718,"height":690};
const content = `<path class="erflbz0dw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ls:arrowdown"} {...others} />);
}

export default Component;
