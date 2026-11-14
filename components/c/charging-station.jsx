import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/i1spumb5t.css';
import '../../css/c/cmhs84bbb.css';
import '../../css/j/jql2fv0it.css';
import '../../css/p/pf5b36btk.css';
import '../../css/d/dzlobbb9f.css';
import '../../css/t/tnizkm3oh.css';
import '../../css/n/neyfr_bma.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><rect class="i1spumb5t"/><path class="cmhs84bbb"/><rect class="jql2fv0it"/><path class="pf5b36btk"/><path class="dzlobbb9f"/><rect class="tnizkm3oh"/><path class="neyfr_bma"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"evicons:charging-station"} {...others} />);
}

export default Component;
