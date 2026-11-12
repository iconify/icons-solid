import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hgdv6fb8f.css';
import '../../css/z/zgjj__krh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hgdv6fb8f"/><path class="zgjj__krh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:world-key"} {...others} />);
}

export default Component;
