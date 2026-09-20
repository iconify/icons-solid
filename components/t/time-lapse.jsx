import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ezfumgw-x.css';
import '../../css/r/rcb2foilk.css';
import '../../css/w/w0hg9ublu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ezfumgw-x"><path class="rcb2foilk"/><path class="w0hg9ublu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:time-lapse"} {...others} />);
}

export default Component;
