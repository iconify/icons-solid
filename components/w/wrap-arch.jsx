import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/s/sm2sega2i.css';
import '../../css/o/oate0sbjl.css';
import '../../css/d/dnhlc8baf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="sm2sega2i"/><path class="oate0sbjl"/><path class="dnhlc8baf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:wrap-arch"} {...others} />);
}

export default Component;
