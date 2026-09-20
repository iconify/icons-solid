import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ck6hbebso.css';
import '../../css/p/pyc3or-ye.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/a/a9kxyaczp.css';
import '../../css/t/tf4bz9k0m.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="ck6hbebso"/><path class="pyc3or-ye"/><g class="jn8qy4bru"><path class="a9kxyaczp"/><path class="tf4bz9k0m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:leafless-tree"} {...others} />);
}

export default Component;
