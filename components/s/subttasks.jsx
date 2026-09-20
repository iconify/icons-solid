import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/q/qfkblubnr.css';
import '../../css/z/zeztm9b4g.css';
import '../../css/x/xi4gu7bkr.css';
import '../../css/g/gph2l2k-x.css';
import '../../css/u/u3i10hqhh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><rect transform="rotate(90 18 9)" class="qfkblubnr"/><rect transform="rotate(90 18 17)" class="zeztm9b4g"/><rect transform="rotate(-90 3 7)" class="xi4gu7bkr"/><path class="gph2l2k-x"/><path class="u3i10hqhh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:subttasks"} {...others} />);
}

export default Component;
