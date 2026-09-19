import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yar687r9u.css';
import '../../css/z/zety2tq-o.css';

const viewBox = {"width":17,"height":17};
const content = `<g class="n1lsf0bnc"><path class="yar687r9u"/><path class="zety2tq-o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:ice-cream"} {...others} />);
}

export default Component;
