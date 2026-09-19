import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/o/o_bifoc4v.css';
import '../../css/h/hsmgu8r4l.css';
import '../../css/i/irua4ub9a.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><rect class="o_bifoc4v"/><ellipse class="hsmgu8r4l"/><path class="irua4ub9a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:pumpkin"} {...others} />);
}

export default Component;
