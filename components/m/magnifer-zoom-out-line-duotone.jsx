import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/b/b4dyhhbeb.css';
import '../../css/r/r4hao6bte.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGyu90jhRQ"><g class="k2u665ban"><circle class="b4dyhhbeb"/><path class="r4hao6bte"/></g></mask></defs><path mask="url(#SVGyu90jhRQ)" class="w49j0rbvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:magnifer-zoom-out-line-duotone"} {...others} />);
}

export default Component;
