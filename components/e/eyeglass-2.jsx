import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xhx6o3bpd.css';
import '../../css/y/yzjnt3ajf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xhx6o3bpd"/><path class="yzjnt3ajf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:eyeglass-2"} {...others} />);
}

export default Component;
