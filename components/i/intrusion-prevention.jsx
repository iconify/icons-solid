import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/emor5sbck.css';
import '../../css/e/eai8xpb2c.css';
import '../../css/q/qdn8ggbmn.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="emor5sbck"/><path class="eai8xpb2c"/><path class="qdn8ggbmn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:intrusion-prevention"} {...others} />);
}

export default Component;
