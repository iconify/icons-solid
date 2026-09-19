import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jvhw2-b0c.css';

const viewBox = {"width":2048,"height":2048};
const content = `<path class="jvhw2-b0c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-mdl2:page-checkedin"} {...others} />);
}

export default Component;
