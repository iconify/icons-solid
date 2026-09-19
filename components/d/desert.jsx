import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z8_cynbui.css';
import '../../css/t/t5-lyujgr.css';
import '../../css/h/hlsavxckz.css';
import '../../css/w/w2t2_y1wo.css';
import '../../css/f/fmjbp4b-t.css';
import '../../css/b/b6wqk2b6x.css';
import '../../css/v/vpph5ypec.css';
import '../../css/s/sb8p6tbza.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="z8_cynbui"/><path class="t5-lyujgr"/><path class="hlsavxckz"/><path class="w2t2_y1wo"/><path class="fmjbp4b-t"/><path class="b6wqk2b6x"/><path class="vpph5ypec"/><path class="sb8p6tbza"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:desert"} {...others} />);
}

export default Component;
