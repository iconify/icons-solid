import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gm08kwb2q.css';
import '../../css/o/ob790gbsh.css';
import '../../css/u/u8k-dprav.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="gm08kwb2q"/><path class="ob790gbsh"/><rect class="u8k-dprav"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:paint-roller"} {...others} />);
}

export default Component;
