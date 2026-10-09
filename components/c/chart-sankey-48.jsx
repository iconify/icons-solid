import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hvtyb5b6l.css';
import '../../css/a/a_35o2j3d.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hvtyb5b6l"/><path class="a_35o2j3d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chart-sankey-48"} {...others} />);
}

export default Component;
