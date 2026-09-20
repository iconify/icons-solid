import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/s/smh1t7bzl.css';
import '../../css/p/p2_6mr9tm.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="smh1t7bzl"/><path class="p2_6mr9tm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:down-arrow"} {...others} />);
}

export default Component;
