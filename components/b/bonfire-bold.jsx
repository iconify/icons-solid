import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h1ntc_v_g.css';
import '../../css/y/yc8urfbgx.css';
import '../../css/j/jgzaczl_g.css';
import '../../css/b/bt-e1yb8o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h1ntc_v_g"/><path class="yc8urfbgx"/><path class="jgzaczl_g"/><path clip-rule="evenodd" class="bt-e1yb8o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bonfire-bold"} {...others} />);
}

export default Component;
