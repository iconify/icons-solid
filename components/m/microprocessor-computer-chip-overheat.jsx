import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/q/qmyruqboo.css';
import '../../css/i/iqvxyvbht.css';
import '../../css/x/xfrwc6b-q.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="qmyruqboo"/><path class="iqvxyvbht"/><path class="xfrwc6b-q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:microprocessor-computer-chip-overheat"} {...others} />);
}

export default Component;
