import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/t/tv3tlu07b.css';
import '../../css/p/pxreuxf1o.css';
import '../../css/o/o8spgk_qs.css';
import '../../css/a/ania2gb4d.css';
import '../../css/q/qst9clp5l.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="tv3tlu07b"/><path class="pxreuxf1o"/><path class="o8spgk_qs"/><path class="ania2gb4d"/><path class="qst9clp5l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:pen-tool"} {...others} />);
}

export default Component;
