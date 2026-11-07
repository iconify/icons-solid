import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ke4nxkbkt.css';
import '../../css/c/cj76tkanc.css';
import '../../css/n/n2gzn3bem.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ke4nxkbkt"/><path class="cj76tkanc"/><path clip-rule="evenodd" class="n2gzn3bem"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:speaker-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
