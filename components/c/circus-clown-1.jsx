import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/q/qsoymgbwb.css';
import '../../css/y/yc3ce7q3e.css';
import '../../css/p/pl9qoeb3e.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="qsoymgbwb"/><path class="yc3ce7q3e"/><path class="pl9qoeb3e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:circus-clown-1"} {...others} />);
}

export default Component;
