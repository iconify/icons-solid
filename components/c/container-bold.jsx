import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jwdr8__0e.css';
import '../../css/x/xkhbux-bb.css';
import '../../css/d/dk28xybqr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jwdr8__0e"/><path clip-rule="evenodd" class="xkhbux-bb"/><path class="dk28xybqr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:container-bold"} {...others} />);
}

export default Component;
