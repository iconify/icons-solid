import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/v/v5pdlvb2f.css';
import '../../css/r/r4qm5gb5i.css';
import '../../css/d/dy1kbl0rd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path clip-rule="evenodd" class="v5pdlvb2f"/><path class="r4qm5gb5i"/><path class="dy1kbl0rd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:cog"} {...others} />);
}

export default Component;
