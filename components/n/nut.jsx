import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/ud6d4db1z.css';
import '../../css/v/vxo3gieyf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ud6d4db1z"/><path class="vxo3gieyf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:nut"} {...others} />);
}

export default Component;
