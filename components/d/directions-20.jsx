import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s_g719pny.css';
import '../../css/a/abx7eg41v.css';
import '../../css/x/x9j18ffun.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="s_g719pny"/><path class="abx7eg41v"/><path class="x9j18ffun"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:directions-20"} {...others} />);
}

export default Component;
