import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jc9s3i56l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jc9s3i56l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:bookmark-bulk-round"} {...others} />);
}

export default Component;
