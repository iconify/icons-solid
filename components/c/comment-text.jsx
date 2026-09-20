import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x93_19b_w.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="x93_19b_w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:comment-text"} {...others} />);
}

export default Component;
