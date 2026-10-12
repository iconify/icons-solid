import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g15nsgp2r.css';
import '../../css/a/at_nf4hhp.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="g15nsgp2r"/><path class="at_nf4hhp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mushroom-48-bold"} {...others} />);
}

export default Component;
