import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mo43we00a.css';
import '../../css/i/iclc-zbcp.css';
import '../../css/x/x3lhvzbhe.css';
import '../../css/d/dm5nb3b6x.css';
import '../../css/c/c4946-17v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mo43we00a"/><path class="iclc-zbcp"/><path class="x3lhvzbhe"/><path class="dm5nb3b6x"/><path class="c4946-17v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:clipboard-bold-duotone"} {...others} />);
}

export default Component;
