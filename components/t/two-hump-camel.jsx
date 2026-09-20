import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/buesj7b-t.css';
import '../../css/m/m6ykrib3p.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/s/s28pbybii.css';
import '../../css/e/e2b97rfie.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="buesj7b-t"/><path class="m6ykrib3p"/><g class="jn8qy4bru"><path class="s28pbybii"/><path class="e2b97rfie"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:two-hump-camel"} {...others} />);
}

export default Component;
