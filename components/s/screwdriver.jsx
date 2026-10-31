import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/y/yuw009bdb.css';
import '../../css/x/xa-dr4z4x.css';
import '../../css/i/il_myibjf.css';
import '../../css/d/ds2n4gb0w.css';
import '../../css/z/zzt5wc4il.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="yuw009bdb"/><path class="wm-shine xa-dr4z4x"/><path class="il_myibjf wm-k"/><path class="ds2n4gb0w wm-a"/><path class="wm-deco zzt5wc4il"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:screwdriver"} {...others} />);
}

export default Component;
