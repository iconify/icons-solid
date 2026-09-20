import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j4u4i6t9z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j4u4i6t9z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:dots-circle-horizontal"} {...others} />);
}

export default Component;
