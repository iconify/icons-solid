import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ckdxm-8ru.css';
import '../../css/f/fhd5hqc9p.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ckdxm-8ru"/><path class="fhd5hqc9p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:oven-20"} {...others} />);
}

export default Component;
