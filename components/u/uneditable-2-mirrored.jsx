import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u1tfhvw2k.css';

const viewBox = {"width":2048,"height":2048};
const content = `<path class="u1tfhvw2k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-mdl2:uneditable-2-mirrored"} {...others} />);
}

export default Component;
