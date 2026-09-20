import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/spg6rbxbq.css';
import '../../css/a/amn_b-_3e.css';
import '../../css/l/l4css97ah.css';
import '../../css/x/xmpcpabmy.css';
import '../../css/h/hehegibhq.css';
import '../../css/q/qrwhk6b5f.css';

const viewBox = {"width":72,"height":72};
const content = `<ellipse class="spg6rbxbq"/><path class="amn_b-_3e"/><path class="l4css97ah"/><path class="xmpcpabmy"/><path class="hehegibhq"/><path class="qrwhk6b5f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:woman-medium-skin-tone-bald"} {...others} />);
}

export default Component;
