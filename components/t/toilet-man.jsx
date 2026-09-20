import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mq85gtbfn.css';
import '../../css/f/f_pikgbvc.css';
import '../../css/z/z_7kwvi-x.css';
import '../../css/u/ubg5h9bog.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="mq85gtbfn"/><path class="f_pikgbvc"/><path class="z_7kwvi-x"/><path class="ubg5h9bog"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:toilet-man"} {...others} />);
}

export default Component;
