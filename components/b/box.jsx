import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/ueukte7_g.css';
import '../../css/i/i3gtwv6im.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ueukte7_g"/><path class="i3gtwv6im"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:box"} {...others} />);
}

export default Component;
