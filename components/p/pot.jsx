import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/g/grtthcc5h.css';
import '../../css/j/jfolg-bwm.css';
import '../../css/o/othrsr8wy.css';
import '../../css/q/qidfz-bii.css';
import '../../css/u/uq3yw2nln.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="grtthcc5h"/><path class="jfolg-bwm"/><path class="othrsr8wy"/><path class="qidfz-bii"/><path class="uq3yw2nln"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:pot"} {...others} />);
}

export default Component;
