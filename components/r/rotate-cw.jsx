import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j896-2bez.css';
import '../../css/t/t066wzbea.css';
import '../../css/h/hrdjp705l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j896-2bez wm-k"/><path class="t066wzbea wm-a"/><path class="hrdjp705l wm-deco"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:rotate-cw"} {...others} />);
}

export default Component;
