import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/afds77vnw.css';
import '../../css/n/nact3c62u.css';
import '../../css/v/vmit0acfb.css';
import '../../css/j/jm4qenbpt.css';
import '../../css/k/kpiza1bfg.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="afds77vnw"/><path clip-rule="evenodd" class="nact3c62u"/><path class="vmit0acfb"/><path clip-rule="evenodd" class="jm4qenbpt"/><path class="kpiza1bfg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:route"} {...others} />);
}

export default Component;
