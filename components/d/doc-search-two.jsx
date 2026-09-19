import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eouuihhqh.css';
import '../../css/i/id2rl2b9f.css';
import '../../css/f/fgmt0jbpw.css';
import '../../css/w/wnue32lch.css';
import '../../css/b/bs6ga1srf.css';
import '../../css/s/syiuwvbtk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="eouuihhqh"/><path class="id2rl2b9f"/><path class="fgmt0jbpw"/><path class="wnue32lch"/><path class="bs6ga1srf"/><path class="syiuwvbtk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:doc-search-two"} {...others} />);
}

export default Component;
