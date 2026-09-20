import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y4nx2qbry.css';
import '../../css/m/m4czh3vxz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="y4nx2qbry"/><path class="m4czh3vxz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:mail-pen"} {...others} />);
}

export default Component;
