import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/g2wm8j_sc.css';
import '../../css/b/b9l7o3qfq.css';
import '../../css/w/w-56ixblp.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="g2wm8j_sc"/><path class="b9l7o3qfq"/><ellipse class="w-56ixblp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:old-phone"} {...others} />);
}

export default Component;
