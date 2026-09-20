import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hfrouqbvh.css';
import '../../css/z/z95vsobgs.css';
import '../../css/e/eenj7y3lv.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="hfrouqbvh"/><path class="z95vsobgs"/><path class="eenj7y3lv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:vst3-16"} {...others} />);
}

export default Component;
