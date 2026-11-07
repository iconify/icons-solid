import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/movjw89ew.css';
import '../../css/a/ax9g9_14z.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="movjw89ew"/><path class="ax9g9_14z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:login-bold"} {...others} />);
}

export default Component;
