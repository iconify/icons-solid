import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p8ed-o54f.css';
import '../../css/v/v4b_1hbpn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="p8ed-o54f"/><path class="v4b_1hbpn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:mail-pin"} {...others} />);
}

export default Component;
