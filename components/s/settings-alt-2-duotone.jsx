import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f2vjo2bea.css';
import '../../css/s/su32efb5p.css';
import '../../css/a/af6c2lt3u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="f2vjo2bea"/><path class="su32efb5p"/><path class="af6c2lt3u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:settings-alt-2-duotone"} {...others} />);
}

export default Component;
