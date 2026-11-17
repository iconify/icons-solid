import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/s/sa4fysb8c.css';
import '../../css/d/dd3zrjbuz.css';
import '../../css/w/w8x877lvf.css';
import '../../css/h/hz2mf3biw.css';
import '../../css/s/sreb2xbns.css';
import '../../css/j/jf6ujqbxl.css';
import '../../css/a/aij78c2bw.css';
import '../../css/t/tej_gcber.css';
import '../../css/x/x1-1ykboc.css';
import '../../css/k/kfqpaxbym.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="sa4fysb8c"/><path class="dd3zrjbuz"/><path class="w8x877lvf"/><path class="hz2mf3biw"/><path class="sreb2xbns"/><path class="jf6ujqbxl"/><path class="aij78c2bw"/><path class="tej_gcber"/><path class="x1-1ykboc"/><path class="kfqpaxbym"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:matita"} {...others} />);
}

export default Component;
