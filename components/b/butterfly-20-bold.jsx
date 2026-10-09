import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aq_5uhbqs.css';
import '../../css/t/th4eb16qw.css';
import '../../css/k/kktadezya.css';
import '../../css/z/zu96o6vqs.css';
import '../../css/e/exd3h-57c.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="aq_5uhbqs"/><path class="th4eb16qw"/><path class="kktadezya"/><path class="zu96o6vqs"/><path class="exd3h-57c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:butterfly-20-bold"} {...others} />);
}

export default Component;
