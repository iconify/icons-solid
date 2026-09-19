import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/wyu27vjiy.css';
import '../../css/p/pi3vo114w.css';
import '../../css/k/kq93mc78v.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="wyu27vjiy"/><path class="pi3vo114w"/><path class="kq93mc78v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:java-jar"} {...others} />);
}

export default Component;
