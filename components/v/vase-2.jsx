import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/f/f3lp0zl_i.css';
import '../../css/m/m-fp1er6w.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="f3lp0zl_i"/><path class="m-fp1er6w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:vase-2"} {...others} />);
}

export default Component;
