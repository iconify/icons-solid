import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/h/ho2pnibko.css';
import '../../css/a/apvo4cjdv.css';
import '../../css/p/p_u5gqrid.css';
import '../../css/v/v9zcxtbjw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="ho2pnibko"/><path class="apvo4cjdv"/><rect class="p_u5gqrid"/><circle class="v9zcxtbjw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:baseball-cap"} {...others} />);
}

export default Component;
