import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mc5usib6x.css';
import '../../css/j/j2plu7b6v.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="mc5usib6x"/><path class="j2plu7b6v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:area-chart"} {...others} />);
}

export default Component;
