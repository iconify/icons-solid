import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/i/i1gg6ztbn.css';
import '../../css/r/rawg3m7dk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="i1gg6ztbn"/><path class="rawg3m7dk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:nose-smell"} {...others} />);
}

export default Component;
