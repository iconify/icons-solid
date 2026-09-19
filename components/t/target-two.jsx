import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e3p1ybc1b.css';
import '../../css/u/u3mwlbnay.css';
import '../../css/d/dfs353agi.css';
import '../../css/n/nn9-ygbxl.css';
import '../../css/i/ib3dwix3e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="e3p1ybc1b"><path class="u3mwlbnay"/><path class="dfs353agi"/><path class="nn9-ygbxl"/><path class="ib3dwix3e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:target-two"} {...others} />);
}

export default Component;
