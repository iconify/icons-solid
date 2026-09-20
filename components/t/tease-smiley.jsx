import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yy3_swbuw.css';
import '../../css/a/at2pojntw.css';
import '../../css/r/rd6q2obgm.css';
import '../../css/e/e855o-pnq.css';
import '../../css/h/h864uuiuw.css';
import '../../css/s/sak52sb2u.css';
import '../../css/f/f1vfsub5y.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="yy3_swbuw"/><path class="at2pojntw"/><path class="rd6q2obgm"/><path class="e855o-pnq"/><path class="h864uuiuw"/><path class="sak52sb2u"/><path class="f1vfsub5y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:tease-smiley"} {...others} />);
}

export default Component;
