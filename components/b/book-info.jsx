import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j5unwvgdz.css';
import '../../css/n/nx5e8zbhq.css';
import '../../css/g/g33moobtw.css';
import '../../css/f/f59k7yeig.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="j5unwvgdz"/><path class="nx5e8zbhq"/><path class="g33moobtw"/><circle class="f59k7yeig"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:book-info"} {...others} />);
}

export default Component;
