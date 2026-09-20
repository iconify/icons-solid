import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/w/wklxfkxcp.css';
import '../../css/b/bb9vrtnmv.css';
import '../../css/e/e6985kl4m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="wklxfkxcp"/><path class="bb9vrtnmv"/><path class="e6985kl4m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:safe-vault"} {...others} />);
}

export default Component;
