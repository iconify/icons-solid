import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f59v1gb7q.css';
import '../../css/m/mulv49bpm.css';
import '../../css/w/wun92qfaz.css';
import '../../css/p/pplcc_b2b.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/y/y_ea1qfkb.css';
import '../../css/z/z7__kz5ac.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="f59v1gb7q"/><path class="mulv49bpm"/><path class="wun92qfaz"/><path class="pplcc_b2b"/><g class="jn8qy4bru"><path class="y_ea1qfkb"/><path class="z7__kz5ac"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:light-rail"} {...others} />);
}

export default Component;
