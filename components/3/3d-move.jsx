import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/w/wnxve1hfv.css';
import '../../css/y/yw0f-6bvm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="wnxve1hfv"/><path class="yw0f-6bvm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:3d-move"} {...others} />);
}

export default Component;
