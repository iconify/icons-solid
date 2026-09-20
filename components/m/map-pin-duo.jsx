import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rzk6tablr.css';
import '../../css/q/qwebhzb2g.css';
import '../../css/u/u2edhbbvr.css';
import '../../css/a/ajdtcgnqh.css';
import '../../css/i/icnirybws.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="rzk6tablr"/><path class="qwebhzb2g"/><path class="u2edhbbvr"/><path class="ajdtcgnqh"/><path class="icnirybws"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:map-pin-duo"} {...others} />);
}

export default Component;
