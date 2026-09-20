import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/b/bpcxl1bfn.css';
import '../../css/s/ssf9uab9k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="bpcxl1bfn"/><path class="ssf9uab9k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:share-code"} {...others} />);
}

export default Component;
