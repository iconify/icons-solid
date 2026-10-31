import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/ryn_kgbjw.css';
import '../../css/k/kjh8nebcm.css';
import '../../css/v/vttuoymod.css';
import '../../css/z/zxm9lxb_h.css';
import '../../css/x/x3ad2ttlw.css';
import '../../css/o/ogqgbbcsm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="ryn_kgbjw"/><path class="kjh8nebcm"/><path class="vttuoymod"/><path class="zxm9lxb_h"/><path class="x3ad2ttlw"/><path class="ogqgbbcsm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:bullhorn-pop"} {...others} />);
}

export default Component;
