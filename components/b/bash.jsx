import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qfttfe_2y.css';
import '../../css/k/kvn-2v0wt.css';
import '../../css/u/uj7ng7b-o.css';
import '../../css/v/vmxx54baz.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="qfttfe_2y"><path class="kvn-2v0wt"/><path class="uj7ng7b-o"/><path class="vmxx54baz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:bash"} {...others} />);
}

export default Component;
