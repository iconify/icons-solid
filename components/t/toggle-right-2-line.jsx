import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h29abmbpa.css';
import '../../css/i/iu_8x_b1x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h29abmbpa"/><path class="iu_8x_b1x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:toggle-right-2-line"} {...others} />);
}

export default Component;
