import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oy37ombvw.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="oy37ombvw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:slightly-frowning-face"} {...others} />);
}

export default Component;
