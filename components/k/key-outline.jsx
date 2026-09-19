import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/y/y1q597bvf.css';
import '../../css/a/ad44mbiog.css';
import '../../css/l/loqsov77d.css';
import '../../css/l/lpmrlkbpq.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="y1q597bvf"/><path class="ad44mbiog"/><path class="loqsov77d"/><path class="lpmrlkbpq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:key-outline"} {...others} />);
}

export default Component;
