import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bfyt3-bfi.css';
import '../../css/a/a29p9-_cz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="bfyt3-bfi"/><path class="a29p9-_cz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:page-break"} {...others} />);
}

export default Component;
