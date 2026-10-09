import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/so2mw5bhs.css';
import '../../css/n/nnuycobpf.css';
import '../../css/n/ney70wbxn.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="so2mw5bhs"/><path class="nnuycobpf"/><path class="ney70wbxn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mountain-river-20-bold"} {...others} />);
}

export default Component;
