import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hs4tj7b-n.css';
import '../../css/r/rn3p8rbfj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hs4tj7b-n"/><path class="rn3p8rbfj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:share-2-20-bold"} {...others} />);
}

export default Component;
