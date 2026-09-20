import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xw6lefb7b.css';
import '../../css/y/yeui5c1nt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xw6lefb7b"/><path class="yeui5c1nt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:circle-arrow-down-left"} {...others} />);
}

export default Component;
