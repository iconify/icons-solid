import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gg0ikk5oo.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/v/v4efpxr1b.css';
import '../../css/h/hi9hqcb9u.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="gg0ikk5oo"/><g class="jn8qy4bru"><path class="v4efpxr1b"/><path class="hi9hqcb9u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:four-leaf-clover"} {...others} />);
}

export default Component;
