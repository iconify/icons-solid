import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l0vj5pbbz.css';
import '../../css/v/v4b_1hbpn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="l0vj5pbbz"/><path class="v4b_1hbpn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:mail-search"} {...others} />);
}

export default Component;
