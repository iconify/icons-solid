import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/a/a3xuudbsq.css';
import '../../css/p/pvov8nfpk.css';
import '../../css/i/i736hpbfw.css';
import '../../css/l/ljigsdbam.css';
import '../../css/u/u3i10hqhh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><rect transform="rotate(90 18 9)" class="a3xuudbsq"/><rect transform="rotate(90 18 17)" class="pvov8nfpk"/><rect transform="rotate(-90 3 7)" class="i736hpbfw"/><path class="ljigsdbam"/><path class="u3i10hqhh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:subttasks-fill"} {...others} />);
}

export default Component;
