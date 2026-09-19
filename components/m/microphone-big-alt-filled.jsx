import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hvrzt5bkz.css';
import '../../css/s/spys_zb9v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hvrzt5bkz"/><path class="spys_zb9v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:microphone-big-alt-filled"} {...others} />);
}

export default Component;
