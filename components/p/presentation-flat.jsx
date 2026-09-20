import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jqmyo7bga.css';
import '../../css/w/whv5eacro.css';
import '../../css/f/fluisfbnu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jqmyo7bga"/><path clip-rule="evenodd" class="whv5eacro"/><path clip-rule="evenodd" class="fluisfbnu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:presentation-flat"} {...others} />);
}

export default Component;
