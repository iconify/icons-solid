import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hr3-7w_6u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hr3-7w_6u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:chevron-left-large-bulk-round"} {...others} />);
}

export default Component;
