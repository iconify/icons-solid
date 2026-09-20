import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yxouekb2m.css';
import '../../css/a/agfevld8e.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/a/axggxtb5f.css';
import '../../css/a/at49vymej.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="yxouekb2m"/><path class="agfevld8e"/><g class="jn8qy4bru"><path class="axggxtb5f"/><path class="at49vymej"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:swan"} {...others} />);
}

export default Component;
