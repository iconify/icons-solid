import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ntg6q2s3z.css';

const viewBox = {"width":2048,"height":2048};
const content = `<path class="ntg6q2s3z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-mdl2:double-column-edit"} {...others} />);
}

export default Component;
