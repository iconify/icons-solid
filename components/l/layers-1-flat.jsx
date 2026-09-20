import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t7vokk1ud.css';
import '../../css/j/jkq7pc-vy.css';
import '../../css/a/aqoze1bhp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="t7vokk1ud"/><path class="jkq7pc-vy"/><path class="aqoze1bhp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:layers-1-flat"} {...others} />);
}

export default Component;
