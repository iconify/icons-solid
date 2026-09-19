import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j64n2mbvc.css';
import '../../css/f/f3pgn3sos.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="j64n2mbvc"/><path class="f3pgn3sos"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:person-plus-fill"} {...others} />);
}

export default Component;
