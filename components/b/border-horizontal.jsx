import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hud2g9gnm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hud2g9gnm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uit:border-horizontal"} {...others} />);
}

export default Component;
