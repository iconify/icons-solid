import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aa8uhrbfv.css';
import '../../css/k/k74qd4bvw.css';
import '../../css/w/w-nov8bbc.css';
import '../../css/e/epb7u9noj.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/p/pt9oonb6o.css';
import '../../css/u/usvnmk89m.css';
import '../../css/m/mvml9-ouh.css';
import '../../css/f/fjagqj7hy.css';
import '../../css/x/xv2tmr0ql.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="aa8uhrbfv"/><path class="k74qd4bvw"/><path class="w-nov8bbc"/><path class="epb7u9noj"/><g class="jn8qy4bru"><path class="pt9oonb6o"/><path class="usvnmk89m"/><path class="mvml9-ouh"/><path class="fjagqj7hy"/><path class="xv2tmr0ql"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:tiger"} {...others} />);
}

export default Component;
