import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/c13u5vq6r.css';
import '../../css/q/q7s39abfc.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="c13u5vq6r"/><path class="q7s39abfc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:axe"} {...others} />);
}

export default Component;
