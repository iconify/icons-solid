import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/v/vmoz48bls.css';
import '../../css/q/qa2gjibfg.css';
import '../../css/x/xltar9lyx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="vmoz48bls"/><ellipse transform="rotate(-90 10 16)" class="qa2gjibfg"/><path class="xltar9lyx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codex:users-group"} {...others} />);
}

export default Component;
