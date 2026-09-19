import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qiy8pp_yv.css';
import '../../css/b/b2m7ke2wk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qiy8pp_yv"/><path class="b2m7ke2wk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:conversation"} {...others} />);
}

export default Component;
