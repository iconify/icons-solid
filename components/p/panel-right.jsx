import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/y/yjf-2cb5x.css';
import '../../css/y/y0gos9ywm.css';
import '../../css/v/vwzncsbmf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="yjf-2cb5x"/><path class="wm-shine y0gos9ywm"/><path class="vwzncsbmf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:panel-right"} {...others} />);
}

export default Component;
