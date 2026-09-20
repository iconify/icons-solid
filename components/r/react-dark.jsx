import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a31m5zifr.css';
import '../../css/j/jex16cb_t.css';
import '../../css/u/ucocikvnm.css';

const viewBox = {"width":569,"height":512};
const content = `<g class="a31m5zifr"><path class="jex16cb_t"/><path class="ucocikvnm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:react-dark"} {...others} />);
}

export default Component;
