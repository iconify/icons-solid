import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cycwnxbny.css';
import '../../css/q/qzjyatb0i.css';
import '../../css/m/m4uhq0bmb.css';
import '../../css/p/px7fr0tbo.css';
import '../../css/h/h66nu-x9t.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="cycwnxbny"/><path class="qzjyatb0i"/><path class="m4uhq0bmb"/><path class="px7fr0tbo"/><path class="h66nu-x9t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mc4-connector-20-bold"} {...others} />);
}

export default Component;
