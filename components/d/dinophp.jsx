import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dx566sbra.css';
import '../../css/e/enkyavbzd.css';
import '../../css/u/ueh0a_bxa.css';
import '../../css/t/tqjs0zb4k.css';
import '../../css/k/ka6kihb3c.css';

const viewBox = {"width":1424.1,"height":1368};
const content = `<g class="dx566sbra"><path class="enkyavbzd"/><path class="ueh0a_bxa"/><path class="tqjs0zb4k"/><path class="ka6kihb3c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:dinophp"} {...others} />);
}

export default Component;
