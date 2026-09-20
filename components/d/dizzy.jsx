import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a-npbkb5y.css';
import '../../css/v/veaxd8p_f.css';
import '../../css/p/pxi613p7d.css';
import '../../css/k/k5l576qwn.css';
import '../../css/o/ocin43i-q.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="a-npbkb5y"/><path class="veaxd8p_f"/><path class="pxi613p7d"/><path class="k5l576qwn"/><path class="ocin43i-q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:dizzy"} {...others} />);
}

export default Component;
