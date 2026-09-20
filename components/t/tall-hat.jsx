import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hyw9t_qqp.css';
import '../../css/d/don06ebsn.css';
import '../../css/m/mvzpmhbis.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="hyw9t_qqp"/><path clip-rule="evenodd" class="don06ebsn"/><path class="mvzpmhbis"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:tall-hat"} {...others} />);
}

export default Component;
