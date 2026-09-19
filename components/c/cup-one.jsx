import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/i/ivwjr0bta.css';
import '../../css/g/g2efavbpy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="ivwjr0bta"/><path class="g2efavbpy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:cup-one"} {...others} />);
}

export default Component;
