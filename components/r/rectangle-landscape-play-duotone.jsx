import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kt86k5xbe.css';
import '../../css/i/i3jxg4b6g.css';
import '../../css/u/ugd6x5rii.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kt86k5xbe"/><path class="i3jxg4b6g"/><path clip-rule="evenodd" class="ugd6x5rii"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:rectangle-landscape-play-duotone"} {...others} />);
}

export default Component;
