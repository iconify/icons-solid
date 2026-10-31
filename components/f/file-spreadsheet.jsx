import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/o/ot5za-bot.css';
import '../../css/d/dee8qgbji.css';
import '../../css/m/mm3rtabqq.css';
import '../../css/x/xd0veabmf.css';
import '../../css/n/n3jvmegul.css';
import '../../css/o/o7uarysry.css';
import '../../css/s/s1hehpngg.css';
import '../../css/n/ny89vd91k.css';
import '../../css/s/sixcuvz3r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="ot5za-bot"/><path class="dee8qgbji"/><path class="mm3rtabqq"/><path class="wm-shine xd0veabmf"/><path class="n3jvmegul wm-k"/><path class="o7uarysry wm-a"/><path class="s1hehpngg"/><path class="ny89vd91k"/><path class="sixcuvz3r wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:file-spreadsheet"} {...others} />);
}

export default Component;
