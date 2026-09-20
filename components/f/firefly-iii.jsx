import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mdvcp6hgr.css';
import '../../css/r/rwj93tb0v.css';
import '../../css/d/dss2nubgh.css';
import '../../css/o/ofvbt1bqq.css';
import '../../css/n/n8sk0tbze.css';
import '../../css/m/m87iiibxr.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGjZSL1dmO" x1="-99.78" x2="-99.78" y1="1.223" y2="2.014" gradientTransform="matrix(436.1719 0 0 647.181 43777.23 -791.588)" gradientUnits="userSpaceOnUse"><stop offset="0" class="mdvcp6hgr"/><stop offset=".5" class="rwj93tb0v"/></linearGradient><path fill="url(#SVGjZSL1dmO)" class="dss2nubgh"/><path class="ofvbt1bqq"/><circle class="n8sk0tbze"/><path class="m87iiibxr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:firefly-iii"} {...others} />);
}

export default Component;
