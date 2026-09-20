import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/o/on2xo7wdk.css';
import '../../css/b/b0euvlbxk.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="on2xo7wdk"/><path class="b0euvlbxk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:left-square-3"} {...others} />);
}

export default Component;
