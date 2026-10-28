import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/r/r1kpv1bac.css';
import '../../css/o/ons53cb4g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="r1kpv1bac"/><circle class="ons53cb4g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codex:settings"} {...others} />);
}

export default Component;
