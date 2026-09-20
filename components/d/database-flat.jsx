import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z8bk0vbyi.css';
import '../../css/b/b1pm1y8oo.css';
import '../../css/j/j7i-4o6fy.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="z8bk0vbyi"/><path class="b1pm1y8oo"/><path clip-rule="evenodd" class="j7i-4o6fy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:database-flat"} {...others} />);
}

export default Component;
