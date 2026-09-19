import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d52dsnbbn.css';
import '../../css/b/b5_1k9b2j.css';
import '../../css/o/oncze6bod.css';
import '../../css/y/ykq52ubxq.css';
import '../../css/m/mgi0klb3l.css';
import '../../css/a/ao8ud4bvo.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="d52dsnbbn"/><path clip-rule="evenodd" class="b5_1k9b2j"/><path class="oncze6bod"/><path class="ykq52ubxq"/><path clip-rule="evenodd" class="mgi0klb3l"/><path class="ao8ud4bvo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:distribute-items-outline"} {...others} />);
}

export default Component;
