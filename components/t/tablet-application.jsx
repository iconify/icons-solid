import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xx8uc8bgh.css';
import '../../css/j/jvgwolb2i.css';
import '../../css/m/maqr8cuyf.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="xx8uc8bgh"/><path class="jvgwolb2i"/><path class="maqr8cuyf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:tablet-application"} {...others} />);
}

export default Component;
