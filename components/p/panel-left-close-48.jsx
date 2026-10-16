import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ty5a_vbpt.css';
import '../../css/u/ubxf06b4w.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ty5a_vbpt"/><path class="ubxf06b4w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:panel-left-close-48"} {...others} />);
}

export default Component;
