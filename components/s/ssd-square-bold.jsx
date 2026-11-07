import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xj_moacsg.css';
import '../../css/s/s2bjr04lg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xj_moacsg"/><path clip-rule="evenodd" class="s2bjr04lg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ssd-square-bold"} {...others} />);
}

export default Component;
