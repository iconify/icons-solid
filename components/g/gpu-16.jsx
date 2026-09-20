import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xfu3-dmkg.css';
import '../../css/a/aukw43xsk.css';
import '../../css/q/qy58zchov.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="xfu3-dmkg"/><path class="aukw43xsk"/><path clip-rule="evenodd" class="qy58zchov"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:gpu-16"} {...others} />);
}

export default Component;
