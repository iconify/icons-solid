import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/g/g51az2k9u.css';
import '../../css/y/y5kp75b4f.css';
import '../../css/z/zocdt8btw.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="g51az2k9u"/><path class="y5kp75b4f"/><path class="zocdt8btw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:hierarchy"} {...others} />);
}

export default Component;
