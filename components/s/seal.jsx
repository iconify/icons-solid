import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/df0m-xmkz.css';
import '../../css/n/ny872o2at.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="df0m-xmkz"/><path class="ny872o2at"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:seal"} {...others} />);
}

export default Component;
