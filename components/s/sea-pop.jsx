import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/co62ijjon.css';
import '../../css/o/o_xn2wbas.css';
import '../../css/r/rrz2_-2xf.css';
import '../../css/y/yaf4dfbga.css';
import '../../css/x/xgm49ewpa.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="co62ijjon"/><path class="o_xn2wbas"/><path clip-rule="evenodd" class="rrz2_-2xf"/><path clip-rule="evenodd" class="yaf4dfbga"/><path clip-rule="evenodd" class="xgm49ewpa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:sea-pop"} {...others} />);
}

export default Component;
