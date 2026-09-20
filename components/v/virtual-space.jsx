import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sb41a-fzn.css';
import '../../css/h/h4negl00g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="sb41a-fzn"/><path class="h4negl00g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:virtual-space"} {...others} />);
}

export default Component;
