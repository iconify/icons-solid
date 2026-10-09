import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/udeabbl7f.css';
import '../../css/b/b82thot2p.css';
import '../../css/f/fkr7gxrju.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="udeabbl7f"/><path class="b82thot2p"/><path class="fkr7gxrju"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:co2-pipeline-20-bold"} {...others} />);
}

export default Component;
