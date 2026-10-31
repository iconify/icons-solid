import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/s/s_pbgac4l.css';
import '../../css/q/qzfp3nbdj.css';
import '../../css/a/amqc4dfgh.css';
import '../../css/k/kye7fgb5m.css';
import '../../css/c/cd6w10bql.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="s_pbgac4l"/><path class="qzfp3nbdj wm-shine"/><path class="amqc4dfgh wm-k"/><path class="kye7fgb5m wm-a"/><path class="cd6w10bql wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:dices"} {...others} />);
}

export default Component;
