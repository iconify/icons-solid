import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ab0bzlbke.css';
import '../../css/e/ec4sscspa.css';
import '../../css/n/nueo4d8or.css';
import '../../css/a/axq4b-fos.css';
import '../../css/o/op100kbpi.css';
import '../../css/y/yr81w4bdr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ab0bzlbke"/><path class="ec4sscspa"/><path class="nueo4d8or"/><path class="axq4b-fos"/><path class="op100kbpi"/><path class="yr81w4bdr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:time-clock-file"} {...others} />);
}

export default Component;
