import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fiabuuwes.css';
import '../../css/h/hpxwjdbem.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fiabuuwes"/><path class="hpxwjdbem"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:data-pipeline-20"} {...others} />);
}

export default Component;
