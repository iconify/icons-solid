import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cqmknwfil.css';
import '../../css/e/ec7w0ebcn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="cqmknwfil"/><path clip-rule="evenodd" class="ec7w0ebcn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:video-duotone"} {...others} />);
}

export default Component;
