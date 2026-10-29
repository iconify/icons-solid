import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/nlv1jkb4s.css';
import '../../css/j/jm7s3nbjh.css';
import '../../css/b/bxx_x96bn.css';
import '../../css/z/z209u23kv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="nlv1jkb4s"/><path class="jm7s3nbjh wm-shadow"/><path class="bxx_x96bn"/><path class="z209u23kv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:kite-engrave"} {...others} />);
}

export default Component;
