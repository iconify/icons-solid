import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i07gtwbuw.css';
import '../../css/e/e-cfuhb1l.css';
import '../../css/t/tteg0wbxj.css';
import '../../css/g/g9sivlltp.css';
import '../../css/t/tg2mksb7i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="i07gtwbuw"/><path class="e-cfuhb1l"/><path class="tteg0wbxj"/><path class="g9sivlltp"/><path class="tg2mksb7i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:helipad-square"} {...others} />);
}

export default Component;
