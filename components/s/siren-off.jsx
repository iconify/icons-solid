import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uv5bwmbob.css';
import '../../css/b/bgfgg5bcr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="uv5bwmbob"/><path class="bgfgg5bcr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:siren-off"} {...others} />);
}

export default Component;
