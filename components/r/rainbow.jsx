import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/skzwabbyw.css';
import '../../css/n/nxncqupjp.css';
import '../../css/x/xxk96h82w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="skzwabbyw"/><path class="nxncqupjp"/><path class="xxk96h82w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:rainbow"} {...others} />);
}

export default Component;
