import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yt10hccok.css';
import '../../css/z/z_2v24bxl.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="yt10hccok"/><path class="z_2v24bxl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:walk"} {...others} />);
}

export default Component;
