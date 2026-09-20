import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g-4szbwhd.css';
import '../../css/x/x878rrbin.css';
import '../../css/h/hoyfu1b9w.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/s/s7zo5sbdd.css';
import '../../css/w/wy5fk2b1m.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="g-4szbwhd"/><path class="x878rrbin"/><path class="hoyfu1b9w"/><g class="jn8qy4bru"><circle class="s7zo5sbdd"/><path class="wy5fk2b1m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:blossom"} {...others} />);
}

export default Component;
