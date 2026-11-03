import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o5-0-5bhi.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/m/mp7-b1b3k.css';
import '../../css/i/ixt7oqbxv.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="o5-0-5bhi"/><g class="jn8qy4bru"><path class="mp7-b1b3k"/><path class="ixt7oqbxv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:back-arrow"} {...others} />);
}

export default Component;
