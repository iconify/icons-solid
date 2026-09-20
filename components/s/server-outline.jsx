import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e75k15bbs.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="e75k15bbs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:server-outline"} {...others} />);
}

export default Component;
