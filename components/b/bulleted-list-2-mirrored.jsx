import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mk-j6bz5j.css';

const viewBox = {"width":2048,"height":2048};
const content = `<path class="mk-j6bz5j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-mdl2:bulleted-list-2-mirrored"} {...others} />);
}

export default Component;
