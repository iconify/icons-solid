import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtpeb-edw.css';
import '../../css/p/pih3221qt.css';
import '../../css/c/c3iyeebaf.css';
import '../../css/r/r03geaczj.css';
import '../../css/x/x0524kbeg.css';
import '../../css/x/x-5281-ro.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xtpeb-edw"><path class="pih3221qt"/><path class="c3iyeebaf"/><path class="r03geaczj"/><path class="x0524kbeg"/></g><path class="x-5281-ro"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:magic-wand-3-bold-duotone"} {...others} />);
}

export default Component;
