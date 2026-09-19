import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/z1say5j3g.css';
import '../../css/g/go6phgbcw.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="z1say5j3g"/><path class="go6phgbcw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:cow"} {...others} />);
}

export default Component;
