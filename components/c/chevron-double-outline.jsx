import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j1bbndrsh.css';
import '../../css/r/r2avjyb5n.css';
import '../../css/o/oosdw9lib.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="j1bbndrsh"><path class="r2avjyb5n"/><path class="oosdw9lib"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:chevron-double-outline"} {...others} />);
}

export default Component;
