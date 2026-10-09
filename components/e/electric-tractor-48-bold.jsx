import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rfao_6b1t.css';
import '../../css/c/c00kytlfm.css';
import '../../css/k/ka9ab8bek.css';
import '../../css/h/hss0ro0-v.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="rfao_6b1t"/><path class="c00kytlfm"/><path class="ka9ab8bek"/><path class="hss0ro0-v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:electric-tractor-48-bold"} {...others} />);
}

export default Component;
