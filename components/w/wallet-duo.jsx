import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ebsul_bxa.css';
import '../../css/b/bqarpxbaq.css';
import '../../css/c/cc2hh2ugt.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="ebsul_bxa"/><path class="bqarpxbaq"/><path class="cc2hh2ugt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:wallet-duo"} {...others} />);
}

export default Component;
