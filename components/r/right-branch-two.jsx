import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/s/suv44kimo.css';
import '../../css/g/gycghjb9u.css';
import '../../css/m/mky47mcxt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="suv44kimo"/><path class="gycghjb9u"/><path class="mky47mcxt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:right-branch-two"} {...others} />);
}

export default Component;
