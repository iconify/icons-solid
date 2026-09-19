import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rhgo_4b9l.css';
import '../../css/b/bsyilto9j.css';
import '../../css/b/b9l5fkb3p.css';
import '../../css/v/vaskeh6cv.css';
import '../../css/r/rn94ev8fr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><rect class="rhgo_4b9l"/><path class="bsyilto9j"/><circle class="b9l5fkb3p"/><circle class="vaskeh6cv"/><path class="rn94ev8fr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:bus-one"} {...others} />);
}

export default Component;
