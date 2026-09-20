import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wj4kgr0on.css';
import '../../css/r/r61zubcbw.css';
import '../../css/o/obrqqsb_x.css';
import '../../css/v/vriijrbsg.css';
import '../../css/d/di65ex7cw.css';
import '../../css/y/ya_av1bii.css';
import '../../css/a/a8864jbed.css';
import '../../css/d/dhmmdwrlc.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="wj4kgr0on"><path class="r61zubcbw"/><path class="obrqqsb_x"/><path class="vriijrbsg"/><path class="di65ex7cw"/><path class="ya_av1bii"/><path class="a8864jbed"/><path class="dhmmdwrlc"/></g><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:demigender"} {...others} />);
}

export default Component;
