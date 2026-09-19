import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/a/a8_tgdb2a.css';
import '../../css/s/s7q79h02l.css';
import '../../css/s/s2k0lf03z.css';
import '../../css/o/oxmzpjbgd.css';
import '../../css/t/tf7yavb4y.css';
import '../../css/l/lxsa1dbte.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><rect class="a8_tgdb2a"/><path class="s7q79h02l"/><path class="s2k0lf03z"/><path class="oxmzpjbgd"/><path class="tf7yavb4y"/><path class="lxsa1dbte"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:list-view"} {...others} />);
}

export default Component;
