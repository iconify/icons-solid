import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jteibjb6u.css';

const viewBox = {"width":2048,"height":2048};
const content = `<path class="jteibjb6u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-mdl2:nav-2-d-map-view"} {...others} />);
}

export default Component;
