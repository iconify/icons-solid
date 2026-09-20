import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/leug8r77a.css';
import '../../css/u/uhh4ro0fa.css';
import '../../css/q/q3s80hbkp.css';
import '../../css/h/hvorckymi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="leug8r77a"/><path class="uhh4ro0fa"/><path clip-rule="evenodd" class="q3s80hbkp"/><path class="hvorckymi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:fortune-telling-sphere-flat"} {...others} />);
}

export default Component;
