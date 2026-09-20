import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/h/h5n29aplr.css';
import '../../css/x/xhmchbbcz.css';
import '../../css/v/vbxwv1jti.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="h5n29aplr"/><path class="xhmchbbcz"/><path class="vbxwv1jti"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:3d-scale"} {...others} />);
}

export default Component;
