import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c5xdmn.css';
import '../../css/g/g_qf3m.css';
import '../../css/c/chu5js.css';
import '../../css/o/oxx-om.css';
import '../../css/t/t-ne3j.css';
import '../../css/b/botfzx.css';
import '../../css/g/gd_4-q.css';
import '../../css/d/d-jkxijw.css';
import '../../css/r/r-to-0px.css';
import '../../css/r/r-to-2_5px.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGoWE0Ud5X"><path class="c5xdmn g_qf3m"/><circle class="chu5js"/><path class="c5xdmn oxx-om t-ne3j"/></mask></defs><path mask="url(#SVGoWE0Ud5X)" class="botfzx"/><path class="c5xdmn gd_4-q t-ne3j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:map-marker-alt-off"} {...others} />);
}

export default Component;
