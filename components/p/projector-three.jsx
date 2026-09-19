import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ujf682zpg.css';
import '../../css/d/d8w_6pb2x.css';
import '../../css/y/ysyzwub0d.css';
import '../../css/y/yj6t9qbyp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="ujf682zpg"/><path class="d8w_6pb2x"/><path class="ysyzwub0d"/><path class="yj6t9qbyp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:projector-three"} {...others} />);
}

export default Component;
