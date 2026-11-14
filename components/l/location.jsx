import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/s/s-y0no3mi.css';
import '../../css/h/hv1mrj1-p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="s-y0no3mi"/><circle class="hv1mrj1-p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codex:location"} {...others} />);
}

export default Component;
