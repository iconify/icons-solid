import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xa_l6hbaj.css';
import '../../css/m/mylxy3b_v.css';
import '../../css/d/d8znebcca.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-k xa_l6hbaj"/><path class="mylxy3b_v wm-k"/><path class="d8znebcca wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:flame"} {...others} />);
}

export default Component;
