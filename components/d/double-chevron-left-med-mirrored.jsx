import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jy6u54b3c.css';

const viewBox = {"width":2048,"height":2048};
const content = `<path class="jy6u54b3c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-mdl2:double-chevron-left-med-mirrored"} {...others} />);
}

export default Component;
