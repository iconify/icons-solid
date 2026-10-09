import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jlf63wklu.css';
import '../../css/c/clfrelb4k.css';
import '../../css/h/hs6jekbhg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jlf63wklu"/><path class="clfrelb4k"/><path class="hs6jekbhg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:refresh-cw-20"} {...others} />);
}

export default Component;
