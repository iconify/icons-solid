import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yw4rhn4rr.css';
import '../../css/v/v76rgfs3i.css';
import '../../css/a/a2dpfgilz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="yw4rhn4rr"/><path class="v76rgfs3i"/><path class="a2dpfgilz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:garage-duotone"} {...others} />);
}

export default Component;
