import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lq98u_b3a.css';
import '../../css/d/dygpaf-cm.css';

const viewBox = {"width":17,"height":16};
const content = `<g transform="translate(1 4)" class="n1lsf0bnc"><path class="lq98u_b3a"/><ellipse class="dygpaf-cm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:view"} {...others} />);
}

export default Component;
