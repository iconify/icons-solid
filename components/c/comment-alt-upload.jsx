import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rnw-p-byd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rnw-p-byd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:comment-alt-upload"} {...others} />);
}

export default Component;
