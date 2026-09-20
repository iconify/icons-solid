import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lttya_ivm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lttya_ivm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:comment-remove-outline"} {...others} />);
}

export default Component;
