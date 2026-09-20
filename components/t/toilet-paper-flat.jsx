import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g8k2-xb4m.css';
import '../../css/w/wqletsbzk.css';
import '../../css/t/tppnmxaww.css';
import '../../css/o/odiecqdis.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="g8k2-xb4m"/><path class="wqletsbzk"/><path clip-rule="evenodd" class="tppnmxaww"/><path clip-rule="evenodd" class="odiecqdis"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:toilet-paper-flat"} {...others} />);
}

export default Component;
