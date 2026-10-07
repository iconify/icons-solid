import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xij_vf5mk.css';
import '../../css/w/w25sab5uh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xij_vf5mk"/><path class="w25sab5uh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:alphabet-georgian"} {...others} />);
}

export default Component;
