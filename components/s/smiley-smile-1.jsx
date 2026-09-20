import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rt5pd106e.css';
import '../../css/h/hpikg810o.css';
import '../../css/j/jlthyywjs.css';
import '../../css/x/x19qmcbwy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rt5pd106e"/><path class="hpikg810o"/><path class="jlthyywjs"/><path class="x19qmcbwy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:smiley-smile-1"} {...others} />);
}

export default Component;
