import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/v0dm3wykm.css';
import '../../css/y/yx1sa4b2k.css';
import '../../css/y/yuzb_sbgj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="v0dm3wykm"/><path class="yx1sa4b2k"/><path class="yuzb_sbgj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:trash-2"} {...others} />);
}

export default Component;
