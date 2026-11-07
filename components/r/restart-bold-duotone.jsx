import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ydoht-zhu.css';
import '../../css/v/v3c_7qboy.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ydoht-zhu"/><path class="v3c_7qboy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:restart-bold-duotone"} {...others} />);
}

export default Component;
