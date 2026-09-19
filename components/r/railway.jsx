import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nd16xj26h.css';
import '../../css/i/iuw_scb5g.css';
import '../../css/w/wjhnqbcbh.css';
import '../../css/a/a3ez_88ly.css';
import '../../css/y/ylue1qbov.css';
import '../../css/o/o7yn3zb5v.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="nd16xj26h"/><circle class="iuw_scb5g"/><circle class="wjhnqbcbh"/><path class="a3ez_88ly"/><path class="ylue1qbov"/><path class="o7yn3zb5v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:railway"} {...others} />);
}

export default Component;
