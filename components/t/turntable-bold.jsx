import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xibju_bku.css';
import '../../css/j/jstpxmb3e.css';
import '../../css/p/pkujej5gx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xibju_bku"/><path class="jstpxmb3e"/><path clip-rule="evenodd" class="pkujej5gx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:turntable-bold"} {...others} />);
}

export default Component;
