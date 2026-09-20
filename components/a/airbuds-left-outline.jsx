import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zx2_3irej.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="zx2_3irej"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:airbuds-left-outline"} {...others} />);
}

export default Component;
