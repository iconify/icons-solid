import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/f/f00rq8qae.css';
import '../../css/q/qaabxtd0t.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="f00rq8qae"/><path class="qaabxtd0t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:flask-2"} {...others} />);
}

export default Component;
