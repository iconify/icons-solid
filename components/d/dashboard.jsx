import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fp5szcbjl.css';
import '../../css/u/uu4naqb6f.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="fp5szcbjl"/><path class="uu4naqb6f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:dashboard"} {...others} />);
}

export default Component;
