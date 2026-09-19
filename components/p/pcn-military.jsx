import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q693w62tt.css';
import '../../css/h/h7jmoqb4s.css';
import '../../css/l/lhgbtcbov.css';
import '../../css/j/j8yh1x58g.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="q693w62tt"/><path class="h7jmoqb4s"/><path class="lhgbtcbov"/><path class="j8yh1x58g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:pcn-military"} {...others} />);
}

export default Component;
