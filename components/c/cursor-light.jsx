import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qjdgb_tlz.css';

const viewBox = {"width":466.73,"height":532.09};
const content = `<path class="qjdgb_tlz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:cursor-light"} {...others} />);
}

export default Component;
