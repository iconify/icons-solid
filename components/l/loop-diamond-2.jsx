import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/v/vvhessdxw.css';
import '../../css/d/dh42uhb2x.css';
import '../../css/p/pkqbodbfw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="vvhessdxw"/><path class="dh42uhb2x"/><path class="pkqbodbfw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:loop-diamond-2"} {...others} />);
}

export default Component;
