import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b4g_xmeih.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b4g_xmeih"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:wifi-solid"} {...others} />);
}

export default Component;
