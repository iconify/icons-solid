import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xbn7xobus.css';
import '../../css/x/xz3gel1_a.css';
import '../../css/y/y4nt_6xmo.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xbn7xobus"/><path class="xz3gel1_a"/><path class="y4nt_6xmo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:flashlight-48-bold"} {...others} />);
}

export default Component;
