import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/q/qwm-occyl.css';
import '../../css/m/mg2yxg0pk.css';
import '../../css/n/n4vlayblf.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="qwm-occyl"/><path class="mg2yxg0pk"/><path class="n4vlayblf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:stamps-portrait-1"} {...others} />);
}

export default Component;
