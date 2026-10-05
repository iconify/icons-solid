import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/n/n6ejr_bwe.css';
import '../../css/k/ktnz-ubrl.css';
import '../../css/f/fvgwuvbpx.css';
import '../../css/p/pg97xtb4f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="n6ejr_bwe"/><path class="ktnz-ubrl"/><path class="fvgwuvbpx"/><path class="pg97xtb4f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:file-text"} {...others} />);
}

export default Component;
