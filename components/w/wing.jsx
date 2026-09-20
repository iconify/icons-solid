import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m7ywrlbnk.css';
import '../../css/p/p0jv7ib7i.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/t/tu2z8fb9g.css';
import '../../css/e/e9rmuj2zs.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="m7ywrlbnk"/><path class="p0jv7ib7i"/><g class="jn8qy4bru"><path class="tu2z8fb9g"/><path class="e9rmuj2zs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:wing"} {...others} />);
}

export default Component;
