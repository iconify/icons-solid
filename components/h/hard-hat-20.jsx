import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z4yi2x4py.css';
import '../../css/u/uax5j8b6w.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="z4yi2x4py"/><path class="uax5j8b6w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hard-hat-20"} {...others} />);
}

export default Component;
