import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/j/j2otj7byo.css';
import '../../css/r/r7c9u534y.css';
import '../../css/y/yzk9web2c.css';
import '../../css/k/k4zu44byi.css';
import '../../css/x/xj47-s6xf.css';
import '../../css/l/lui92hxmf.css';
import '../../css/g/g2emphbrg.css';
import '../../css/x/x3dh0z17c.css';
import '../../css/k/k4z1c6-vp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="j2otj7byo"/><path class="r7c9u534y"/><path class="yzk9web2c"/><path class="k4zu44byi"/><path class="xj47-s6xf"/><path class="lui92hxmf"/><path class="g2emphbrg"/><path class="x3dh0z17c"/><path class="k4z1c6-vp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:sun"} {...others} />);
}

export default Component;
