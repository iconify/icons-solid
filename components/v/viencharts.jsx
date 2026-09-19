import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/m/m84lw8bft.css';
import '../../css/e/eq8_rgx0j.css';
import '../../css/f/fryp0s66n.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><circle class="m84lw8bft"/><circle class="eq8_rgx0j"/><circle class="fryp0s66n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:viencharts"} {...others} />);
}

export default Component;
