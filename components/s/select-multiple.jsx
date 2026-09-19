import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a4h-6kbxp.css';
import '../../css/o/ooxjw-29z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a4h-6kbxp"/><path class="ooxjw-29z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:select-multiple"} {...others} />);
}

export default Component;
