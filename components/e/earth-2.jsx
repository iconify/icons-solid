import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/m/mhp6nxr5f.css';
import '../../css/b/b5ln64y4n.css';
import '../../css/s/sltgiab_k.css';
import '../../css/r/r-uoj7bks.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="mhp6nxr5f"/><path clip-rule="evenodd" class="b5ln64y4n"/><path class="sltgiab_k"/><path class="r-uoj7bks"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:earth-2"} {...others} />);
}

export default Component;
