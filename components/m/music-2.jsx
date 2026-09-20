import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v2xh89b7y.css';
import '../../css/w/wq3qu2bin.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="v2xh89b7y"/><path class="wq3qu2bin"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:music-2"} {...others} />);
}

export default Component;
