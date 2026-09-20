import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/z/zvlx5pb-z.css';
import '../../css/f/fksoxnoox.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="zvlx5pb-z"/><path class="fksoxnoox"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:clock-alt"} {...others} />);
}

export default Component;
