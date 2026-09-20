import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wuyiu9r0k.css';
import '../../css/s/st1qg7qbo.css';
import '../../css/d/daaertubm.css';
import '../../css/j/jpt70_i2t.css';
import '../../css/f/fgttlxi8q.css';
import '../../css/c/crrk36bnp.css';
import '../../css/q/qukwuds2z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wuyiu9r0k"/><path class="st1qg7qbo"/><path class="daaertubm"/><path class="jpt70_i2t"/><path class="fgttlxi8q"/><path class="crrk36bnp"/><path class="qukwuds2z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:single-neutral-folder-box"} {...others} />);
}

export default Component;
