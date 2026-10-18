import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pkp57tl3g.css';
import '../../css/d/dhq72bbjg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="pkp57tl3g"/><path class="dhq72bbjg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:expansion-vessel-20-bold"} {...others} />);
}

export default Component;
