import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uyy55sbjn.css';
import '../../css/p/pksro9bgq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="uyy55sbjn"/><path class="pksro9bgq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:accessibility-stroke-20"} {...others} />);
}

export default Component;
