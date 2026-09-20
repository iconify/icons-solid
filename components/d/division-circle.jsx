import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/v/v10irub5c.css';
import '../../css/f/fnx_w819g.css';
import '../../css/y/yjucvx-nl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="v10irub5c"/><path class="fnx_w819g"/><path class="yjucvx-nl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:division-circle"} {...others} />);
}

export default Component;
