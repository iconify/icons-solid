import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vaw8nnulj.css';
import '../../css/b/bpcftybjh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="vaw8nnulj"/><path class="bpcftybjh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:traffic-cone-20-bold"} {...others} />);
}

export default Component;
