import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/s/s3isivb-u.css';
import '../../css/y/y8ymmydcb.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="s3isivb-u"/><path class="y8ymmydcb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:multi-folder"} {...others} />);
}

export default Component;
