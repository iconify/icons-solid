import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yl3fapacx.css';
import '../../css/c/cerp886bk.css';
import '../../css/f/fdjy-kuog.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-k yl3fapacx"/><path class="cerp886bk wm-a"/><path class="fdjy-kuog wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:settings"} {...others} />);
}

export default Component;
