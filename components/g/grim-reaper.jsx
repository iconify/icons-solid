import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xo3c_0mes.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xo3c_0mes"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:grim-reaper"} {...others} />);
}

export default Component;
