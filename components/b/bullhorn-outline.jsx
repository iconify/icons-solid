import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pd9w0yveu.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="pd9w0yveu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:bullhorn-outline"} {...others} />);
}

export default Component;
