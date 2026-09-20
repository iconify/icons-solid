import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nvpzb3bwd.css';
import '../../css/s/sa-c47eyu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="nvpzb3bwd"/><path class="sa-c47eyu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:home-2"} {...others} />);
}

export default Component;
