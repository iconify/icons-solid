import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b8hfadckz.css';
import '../../css/a/a05xr_gmb.css';
import '../../css/g/ggxoisrbh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="b8hfadckz"/><path class="a05xr_gmb"/><path class="ggxoisrbh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:gallery-favorite-filled"} {...others} />);
}

export default Component;
