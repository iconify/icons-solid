import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l5ktyqe9h.css';
import '../../css/f/f8m-cqb9t.css';
import '../../css/k/kw1p4dccr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="l5ktyqe9h"/><path clip-rule="evenodd" class="f8m-cqb9t"/><path class="kw1p4dccr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:rectangle-expand"} {...others} />);
}

export default Component;
