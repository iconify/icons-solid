import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/phg_u2j0a.css';
import '../../css/g/gchgqccgt.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="phg_u2j0a"/><path class="gchgqccgt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:houses-fill"} {...others} />);
}

export default Component;
