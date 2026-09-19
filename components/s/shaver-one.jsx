import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/o/ow6_-xxas.css';
import '../../css/w/w76ww1b8j.css';
import '../../css/t/tbf9bplkf.css';
import '../../css/f/ft6udiq_a.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="ow6_-xxas"/><path class="w76ww1b8j"/><path class="tbf9bplkf"/><circle class="ft6udiq_a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:shaver-one"} {...others} />);
}

export default Component;
