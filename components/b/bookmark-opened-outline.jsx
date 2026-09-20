import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dbneb4u-e.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="dbneb4u-e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bookmark-opened-outline"} {...others} />);
}

export default Component;
