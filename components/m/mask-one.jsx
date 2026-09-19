import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/b/byxlecbov.css';
import '../../css/f/f955u0bmm.css';
import '../../css/g/g95powb-p.css';
import '../../css/u/u50o5fb2s.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="byxlecbov"/><path class="f955u0bmm"/><path class="g95powb-p"/><path class="u50o5fb2s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:mask-one"} {...others} />);
}

export default Component;
