import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g-7ml0b5j.css';
import '../../css/z/z1gk-qo7k.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="g-7ml0b5j"/><path class="z1gk-qo7k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sofa-20-bold"} {...others} />);
}

export default Component;
