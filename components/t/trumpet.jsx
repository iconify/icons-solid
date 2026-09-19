import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/h/huw2h1tfj.css';
import '../../css/r/r1to0idcl.css';
import '../../css/h/hz6hdesqo.css';
import '../../css/z/z-ekwr-ul.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="huw2h1tfj"/><path class="r1to0idcl"/><path class="hz6hdesqo"/><path class="z-ekwr-ul"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:trumpet"} {...others} />);
}

export default Component;
