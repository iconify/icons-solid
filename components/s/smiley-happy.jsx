import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rt5pd106e.css';
import '../../css/h/hpikg810o.css';
import '../../css/x/x19qmcbwy.css';
import '../../css/a/a44pk0bcs.css';
import '../../css/q/qsqpdnj4m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rt5pd106e"/><path class="hpikg810o"/><path class="x19qmcbwy"/><path class="a44pk0bcs"/><path class="qsqpdnj4m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:smiley-happy"} {...others} />);
}

export default Component;
