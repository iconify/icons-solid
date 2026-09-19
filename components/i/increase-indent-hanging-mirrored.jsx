import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h3dmq6brk.css';

const viewBox = {"width":2048,"height":2048};
const content = `<path class="h3dmq6brk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-mdl2:increase-indent-hanging-mirrored"} {...others} />);
}

export default Component;
