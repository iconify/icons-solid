import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/g/gf9el8b3x.css';
import '../../css/l/lglw2iyzz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="gf9el8b3x"/><path class="lglw2iyzz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:lift"} {...others} />);
}

export default Component;
