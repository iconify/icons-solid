import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/c4vasl-4f.css';
import '../../css/n/nsfxyjbrg.css';

const viewBox = {"width":17,"height":17};
const content = `<g class="n1lsf0bnc"><path class="c4vasl-4f"/><path class="nsfxyjbrg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:cran"} {...others} />);
}

export default Component;
