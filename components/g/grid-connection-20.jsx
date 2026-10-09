import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lct1fn02i.css';
import '../../css/h/h_ct2hn4p.css';
import '../../css/j/jdhs7_bdy.css';
import '../../css/w/wwfzbmz9y.css';
import '../../css/j/jtx38t8rb.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="lct1fn02i"/><path class="h_ct2hn4p"/><path class="jdhs7_bdy"/><path class="wwfzbmz9y"/><path class="jtx38t8rb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:grid-connection-20"} {...others} />);
}

export default Component;
