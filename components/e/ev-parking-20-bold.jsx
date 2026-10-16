import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h6forwbcg.css';
import '../../css/k/kh20glbaj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="h6forwbcg"/><path class="kh20glbaj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ev-parking-20-bold"} {...others} />);
}

export default Component;
