import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sa2v1ywbh.css';
import '../../css/r/rfg83443v.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="sa2v1ywbh"/><path class="rfg83443v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:user-plus-20"} {...others} />);
}

export default Component;
