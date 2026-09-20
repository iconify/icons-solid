import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qagc1qa8v.css';
import '../../css/s/sicbtiqev.css';
import '../../css/o/o47oav_pt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qagc1qa8v"/><rect class="sicbtiqev"/><path class="o47oav_pt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:copy-x"} {...others} />);
}

export default Component;
