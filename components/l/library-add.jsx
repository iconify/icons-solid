import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qtgd7zbyl.css';
import '../../css/w/ws3ki_htx.css';
import '../../css/m/m3p5ncbjq.css';
import '../../css/p/pphcryv5p.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qtgd7zbyl"/><path class="ws3ki_htx"/><path class="m3p5ncbjq"/><path class="pphcryv5p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:library-add"} {...others} />);
}

export default Component;
