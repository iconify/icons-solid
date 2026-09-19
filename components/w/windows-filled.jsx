import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r51k3lv5c.css';
import '../../css/v/v_3i9wmxn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r51k3lv5c"/><path class="v_3i9wmxn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:windows-filled"} {...others} />);
}

export default Component;
