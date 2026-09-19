import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/df4av9boa.css';
import '../../css/u/u0qyy6b6u.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="df4av9boa"/><path class="u0qyy6b6u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:screen-scale"} {...others} />);
}

export default Component;
