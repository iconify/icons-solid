import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/thzgjtb1r.css';
import '../../css/x/x7s3ef7xj.css';
import '../../css/f/f2_p00lwq.css';
import '../../css/d/d67rd9bsz.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="thzgjtb1r"/><path class="x7s3ef7xj"/><path class="f2_p00lwq"/><path class="d67rd9bsz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:check-double-outline"} {...others} />);
}

export default Component;
