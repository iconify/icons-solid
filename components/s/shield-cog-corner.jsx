import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p34mgacly.css';
import '../../css/p/pe49ib2bf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="p34mgacly"/><circle class="pe49ib2bf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:shield-cog-corner"} {...others} />);
}

export default Component;
