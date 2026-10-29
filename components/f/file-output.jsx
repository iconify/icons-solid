import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/q04h6xbxi.css';
import '../../css/r/r48oglovt.css';
import '../../css/s/sxqrgkbrx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="q04h6xbxi"/><path class="r48oglovt"/><path class="sxqrgkbrx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:file-output"} {...others} />);
}

export default Component;
