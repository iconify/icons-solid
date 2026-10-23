import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/s/s-ayi5bku.css';
import '../../css/r/rxawnrbyo.css';
import '../../css/a/auzjo7sxf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="s-ayi5bku"/><path class="rxawnrbyo"/><path class="auzjo7sxf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:atom"} {...others} />);
}

export default Component;
