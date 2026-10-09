import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pn86m-bcf.css';
import '../../css/v/vvf4d-dpu.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="pn86m-bcf"/><path class="vvf4d-dpu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mail-20-bold"} {...others} />);
}

export default Component;
