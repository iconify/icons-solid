import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1xmxc0l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bc1xmxc0l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:button-filled"} {...others} />);
}

export default Component;
