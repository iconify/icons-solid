import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ce6ljt2_d.css';
import '../../css/g/gpwzcjb5p.css';
import '../../css/d/d9livjodx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ce6ljt2_d"/><path class="gpwzcjb5p"/><path class="d9livjodx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heat-pump-ground-48-bold"} {...others} />);
}

export default Component;
