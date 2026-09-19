import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e6ogw43lg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e6ogw43lg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-comment-add"} {...others} />);
}

export default Component;
