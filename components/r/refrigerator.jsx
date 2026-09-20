import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/d/dte6tcehs.css';
import '../../css/l/l79c6k33t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="dte6tcehs"/><path class="l79c6k33t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:refrigerator"} {...others} />);
}

export default Component;
