import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ii45op72q.css';
import '../../css/m/mfv2n_b4f.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ii45op72q"/><path class="mfv2n_b4f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-lantern-20"} {...others} />);
}

export default Component;
