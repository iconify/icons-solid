import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z_fvlabzg.css';
import '../../css/n/nou07ac-w.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="z_fvlabzg"/><path class="nou07ac-w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:draught-proofing-20"} {...others} />);
}

export default Component;
